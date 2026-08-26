package com.example.transfers.domain;

import static com.example.transfers.support.AccountBuilder.anAccount;
import static com.example.transfers.support.Monies.eur;
import static com.example.transfers.support.Monies.usd;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

/**
 * Testing playbook §4.1 — domain unit test: no Spring, no mocks, plain
 * {@code new}. Assertions compare whole decision values, not interactions.
 *
 * <p>Expected values are constructed directly with {@code new}, not via the
 * {@code TransferDecision} factories the production code also calls —
 * comparing a factory's output to the same factory's output lets a broken
 * factory pass its own test. (A surviving PIT mutant taught us that.)
 */
class TransferPolicyTest {

    private final TransferPolicy policy = new TransferPolicy();

    @Test
    void rejectsTransferWhenBalanceInsufficient() {
        var account = anAccount().withBalance(usd(50)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(new TransferDecision.Rejected(RejectionReason.INSUFFICIENT_FUNDS));
    }

    @Test
    void rejectsTransferFromSuspendedAccount() {
        var account = anAccount().suspended().withBalance(usd(500)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(new TransferDecision.Rejected(RejectionReason.ACCOUNT_SUSPENDED));
    }

    @Test
    void approvesTransferOfTheEntireBalance() {
        // Documents the boundary: exactly the balance is allowed.
        var account = anAccount().withBalance(usd(100)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(new TransferDecision.Approved());
    }

    @Test
    void rejectsTransferWhenRequestCurrencyDoesNotMatchSourceAccount() {
        var account = anAccount().withBalance(usd(500)).build();

        var result = policy.evaluate(account, eur(100));

        assertThat(result).isEqualTo(new TransferDecision.Rejected(RejectionReason.CURRENCY_MISMATCH));
    }

    @Test
    void currencyMismatchIsDetectedBeforeComparingAmounts() {
        // If the mismatch guard ran after the balance comparison, this would
        // throw (Money.isLessThan rejects cross-currency comparisons) instead
        // of producing a clean rejection.
        var account = anAccount().withBalance(usd(10)).build();

        var result = policy.evaluate(account, eur(100_000));

        assertThat(result).isEqualTo(new TransferDecision.Rejected(RejectionReason.CURRENCY_MISMATCH));
    }
}
