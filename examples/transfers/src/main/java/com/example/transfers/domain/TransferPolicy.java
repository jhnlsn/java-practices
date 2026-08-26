package com.example.transfers.domain;

/**
 * Development playbook §3.2 — pure business rules. Instantiable with
 * {@code new}, no I/O, no framework: the reason unit tests here need no
 * mocks and no Spring context (testing playbook §4.1).
 */
public class TransferPolicy {

    public TransferDecision evaluate(Account from, Money amount) {
        // Checked first: a request stated in a currency other than the source
        // account's is never comparable to the balance below — Money.isLessThan
        // throws on a currency mismatch, so this guard must run before it, not
        // just take precedence over it.
        if (!amount.currency().equals(from.balance().currency())) {
            return TransferDecision.rejected(RejectionReason.CURRENCY_MISMATCH);
        }
        if (from.balance().isLessThan(amount)) {
            return TransferDecision.rejected(RejectionReason.INSUFFICIENT_FUNDS);
        }
        if (from.status() == AccountStatus.SUSPENDED) {
            return TransferDecision.rejected(RejectionReason.ACCOUNT_SUSPENDED);
        }
        return TransferDecision.approved();
    }
}
