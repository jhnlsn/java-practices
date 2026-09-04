package com.example.antipatterns.testing.mockedowned.bad;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;

/**
 * REJECT ON SIGHT — testing playbook §6.1: "@Mock/@MockBean on own
 * repository/service" and "verify(...) as the main assertion".
 *
 * This test PASSES against the {@link TransferService} above — whose debit
 * line adds instead of subtracts. It verifies that {@code save} was called,
 * but never asks <em>with what balances</em>. It restates the
 * implementation's call graph, so it can only fail when the implementation
 * changes shape — i.e., exactly when a refactor is correct.
 *
 * Required fix: {@code testing.mockedowned.good}, and for the full flow, the
 * real thing: transfers/src/test/.../TransferFlowIT.java.
 *
 * <p>Lives in the main source set: it compiles as a specimen but is never
 * executed by any build.
 */
public class MockedTransferTest {

    private final AccountRepository accounts = mock(AccountRepository.class);
    private final TransferService service = new TransferService(accounts);

    @Test
    void transfersMoney() {
        var accountA = new Account("A", 100_00);
        var accountB = new Account("B", 0);
        when(accounts.byId("A")).thenReturn(Optional.of(accountA));
        when(accounts.byId("B")).thenReturn(Optional.of(accountB));

        service.transfer("A", "B", 40_00);

        verify(accounts).save(accountA);
        verify(accounts).save(accountB); // saved... with what balances? This test doesn't know.
    }
}
