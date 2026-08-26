package com.example.transfers;

import static com.example.transfers.support.AccountBuilder.anAccount;
import static com.example.transfers.support.Monies.usd;
import static org.assertj.core.api.Assertions.assertThat;
import static org.awaitility.Awaitility.await;

import java.time.Duration;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;

import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.port.Accounts;
import com.example.transfers.support.IntegrationTest;

/**
 * Testing playbook §4.3 — the workhorse: full application over HTTP against
 * real Postgres. Assertions target observable outcomes only — response, DB
 * state, ledger rows — never interactions.
 */
@IntegrationTest
class TransferFlowIT {

    @Autowired TestRestTemplate http;
    @Autowired Accounts accounts;
    @Autowired JdbcTemplate jdbc;

    @BeforeEach
    void cleanSlate() {
        // Shared cached context ⇒ every test cleans its data
        // (adversarial review §9's companion rule).
        jdbc.update("delete from ledger_entries");
        jdbc.update("delete from accounts");
    }

    @Test
    void completedTransferMovesFundsAndRecordsLedgerEntry() {
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());
        accounts.save(anAccount().withId("B").withBalance(usd(0)).build());

        var response = postTransfer("""
                {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).containsEntry("status", "COMPLETED");
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(60));
        assertThat(accounts.byId(new AccountId("B")).orElseThrow().balance()).isEqualTo(usd(40));

        // §4.5 — the ledger write is async; await it, never sleep for it.
        await().atMost(Duration.ofSeconds(5)).untilAsserted(() ->
                assertThat(jdbc.queryForObject(
                        "select count(*) from ledger_entries where from_account = 'A'", Long.class))
                        .isEqualTo(1L));
    }

    @Test
    void rejectedTransferLeavesBalancesUntouched() {
        accounts.save(anAccount().withId("A").withBalance(usd(50)).build());
        accounts.save(anAccount().withId("B").withBalance(usd(0)).build());

        var response = postTransfer("""
                {"from":"A","to":"B","amount":100.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNPROCESSABLE_ENTITY);
        assertThat(response.getBody()).containsEntry("reason", "INSUFFICIENT_FUNDS");
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(50));
        assertThat(accounts.byId(new AccountId("B")).orElseThrow().balance()).isEqualTo(usd(0));
    }

    @Test
    void transferToUnknownAccountReturns404AndChangesNothing() {
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());

        var response = postTransfer("""
                {"from":"A","to":"GHOST","amount":40.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(100));
    }

    private ResponseEntity<Map<String, Object>> postTransfer(String json) {
        var headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return http.exchange("/transfers", HttpMethod.POST, new HttpEntity<>(json, headers),
                new ParameterizedTypeReference<>() {});
    }
}
