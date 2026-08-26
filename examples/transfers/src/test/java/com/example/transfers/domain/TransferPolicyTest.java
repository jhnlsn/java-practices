package com.example.transfers.domain;

import static com.example.transfers.support.AccountBuilder.anAccount;
import static com.example.transfers.support.Monies.usd;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

/**
 * Testing playbook §4.1 — domain unit test: no Spring, no mocks, plain
 * {@code new}. Assertions compare whole decision values, not interactions.
 */
class TransferPolicyTest {

    private final TransferPolicy policy = new TransferPolicy();

    @Test
    void rejectsTransferWhenBalanceInsufficient() {
        var account = anAccount().withBalance(usd(50)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(TransferDecision.rejected(RejectionReason.INSUFFICIENT_FUNDS));
    }

    @Test
    void rejectsTransferFromSuspendedAccount() {
        var account = anAccount().suspended().withBalance(usd(500)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(TransferDecision.rejected(RejectionReason.ACCOUNT_SUSPENDED));
    }

    @Test
    void approvesTransferOfTheEntireBalance() {
        // Documents the boundary: exactly the balance is allowed.
        var account = anAccount().withBalance(usd(100)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(TransferDecision.approved());
    }
}
