package com.example.transfers;

import static com.example.transfers.support.AccountBuilder.anAccount;
import static com.example.transfers.support.Monies.eur;
import static com.example.transfers.support.Monies.usd;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.getRequestedFor;
import static com.github.tomakehurst.wiremock.client.WireMock.okJson;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;
import static com.github.tomakehurst.wiremock.client.WireMock.urlPathEqualTo;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static org.assertj.core.api.Assertions.assertThat;
import static org.awaitility.Awaitility.await;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;
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
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.port.Accounts;
import com.example.transfers.support.IntegrationTest;
import com.github.tomakehurst.wiremock.junit5.WireMockExtension;

/**
 * Testing playbook §4.3 — the workhorse: full application over HTTP against
 * real Postgres. Assertions target observable outcomes only — response, DB
 * state, ledger rows — never interactions. The FX provider is a boundary we
 * don't own (testing playbook §4.4), doubled here with WireMock so the
 * cross-currency flow runs through the real adapter end to end.
 */
@IntegrationTest
class TransferFlowIT {

    @RegisterExtension
    static WireMockExtension fxApi = WireMockExtension.newInstance()
            .options(wireMockConfig().dynamicPort())
            .build();

    @DynamicPropertySource
    static void fxProperties(DynamicPropertyRegistry registry) {
        registry.add("fx.base-url", fxApi::baseUrl);
    }

    @Autowired TestRestTemplate http;
    @Autowired Accounts accounts;
    @Autowired JdbcTemplate jdbc;

    @BeforeEach
    void cleanSlate() {
        // Shared cached context ⇒ every test cleans its data
        // (testing playbook §6.3's companion rule).
        jdbc.update("delete from ledger_entries");
        jdbc.update("delete from accounts");
        fxApi.resetAll();
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

    @Test
    void sameCurrencyTransferNeverCallsTheRateProvider() {
        // No stub registered: a call to the FX provider would 404 and abort
        // the transfer, so a 201 here already proves the port was skipped.
        // The explicit verify below makes that proof visible in the failure
        // output rather than implied by an unrelated assertion passing.
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());
        accounts.save(anAccount().withId("B").withBalance(usd(0)).build());

        var response = postTransfer("""
                {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        fxApi.verify(0, getRequestedFor(urlMatching("/rates/.*")));
    }

    @Test
    void crossCurrencyTransferDebitsSourceAndCreditsTargetAtTheConvertedAmount() {
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());
        accounts.save(anAccount().withId("B").withBalance(eur(0)).build());
        fxApi.stubFor(get(urlPathEqualTo("/rates/USD/EUR"))
                .willReturn(okJson("""
                        {"base":"USD","quote":"EUR","rate":0.90}
                        """)));

        var response = postTransfer("""
                {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(60));
        assertThat(accounts.byId(new AccountId("B")).orElseThrow().balance()).isEqualTo(eur("36.00"));

        // §5 of the task — the ledger records the debited (source-currency)
        // amount, not the converted amount the target received.
        await().atMost(Duration.ofSeconds(5)).untilAsserted(() -> {
            assertThat(jdbc.queryForObject(
                    "select amount from ledger_entries where from_account = 'A'", BigDecimal.class))
                    .isEqualByComparingTo("40.00");
            assertThat(jdbc.queryForObject(
                    "select currency from ledger_entries where from_account = 'A'", String.class))
                    .isEqualTo("USD");
        });
    }

    @Test
    void transferRequestCurrencyMustMatchTheSourceAccountsCurrency() {
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());
        accounts.save(anAccount().withId("B").withBalance(eur(0)).build());

        var response = postTransfer("""
                {"from":"A","to":"B","amount":40.00,"currency":"EUR"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNPROCESSABLE_ENTITY);
        assertThat(response.getBody()).containsEntry("reason", "CURRENCY_MISMATCH");
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(100));
        assertThat(accounts.byId(new AccountId("B")).orElseThrow().balance()).isEqualTo(eur(0));
        fxApi.verify(0, getRequestedFor(urlMatching("/rates/.*")));
    }

    @Test
    void crossCurrencyTransferAbortsWithNothingPersistedWhenRateProviderIsUnavailable() {
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());
        accounts.save(anAccount().withId("B").withBalance(eur(0)).build());
        fxApi.stubFor(get(urlPathEqualTo("/rates/USD/EUR"))
                .willReturn(aResponse().withStatus(500)));

        var response = postTransfer("""
                {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.SERVICE_UNAVAILABLE);
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(100));
        assertThat(accounts.byId(new AccountId("B")).orElseThrow().balance()).isEqualTo(eur(0));
        assertThat(jdbc.queryForObject("select count(*) from ledger_entries", Long.class)).isEqualTo(0L);
    }

    private ResponseEntity<Map<String, Object>> postTransfer(String json) {
        var headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return http.exchange("/transfers", HttpMethod.POST, new HttpEntity<>(json, headers),
                new ParameterizedTypeReference<>() {});
    }
}
