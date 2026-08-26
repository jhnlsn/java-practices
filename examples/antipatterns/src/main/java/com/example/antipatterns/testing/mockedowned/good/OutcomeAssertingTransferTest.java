package com.example.antipatterns.testing.mockedowned.good;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.junit.jupiter.api.Test;

import com.example.antipatterns.testing.mockedowned.bad.Account;
import com.example.antipatterns.testing.mockedowned.bad.AccountRepository;
import com.example.antipatterns.testing.mockedowned.bad.TransferService;

/**
 * The same service, tested on OUTCOMES: what are the balances afterward? A
 * five-line in-memory implementation of the repository port replaces the
 * mock, and this test FAILS against the buggy add-instead-of-subtract
 * service — expected 60.00, actual 140.00 — which is the entire point.
 *
 * <p>When the flow includes real persistence and HTTP, the outcome-asserting
 * test is an integration test: see transfers/TransferFlowIT. Doubles remain
 * legitimate only at ports (testing playbook §6.3) — and note the double
 * here IS at a port, and is a trivial fake, not a stub-and-verify script.
 */
public class OutcomeAssertingTransferTest {

    static class InMemoryAccounts implements AccountRepository {
        private final Map<String, Account> store = new HashMap<>();

        @Override public Optional<Account> byId(String id) { return Optional.ofNullable(store.get(id)); }
        @Override public void save(Account account) { store.put(account.id(), account); }
    }

    private final InMemoryAccounts accounts = new InMemoryAccounts();
    private final TransferService service = new TransferService(accounts);

    @Test
    void completedTransferMovesFunds() {
        accounts.save(new Account("A", 100_00));
        accounts.save(new Account("B", 0));

        service.transfer("A", "B", 40_00);

        assertThat(accounts.byId("A").orElseThrow().balanceCents()).isEqualTo(60_00);
        assertThat(accounts.byId("B").orElseThrow().balanceCents()).isEqualTo(40_00);
    }
}
