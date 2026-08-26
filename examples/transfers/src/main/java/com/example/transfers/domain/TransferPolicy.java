package com.example.transfers.domain;

/**
 * Development playbook §3.2 — pure business rules. Instantiable with
 * {@code new}, no I/O, no framework: the reason unit tests here need no
 * mocks and no Spring context (testing playbook §4.1).
 */
public class TransferPolicy {

    public TransferDecision evaluate(Account from, Money amount) {
        if (from.balance().isLessThan(amount)) {
            return TransferDecision.rejected(RejectionReason.INSUFFICIENT_FUNDS);
        }
        if (from.status() == AccountStatus.SUSPENDED) {
            return TransferDecision.rejected(RejectionReason.ACCOUNT_SUSPENDED);
        }
        return TransferDecision.approved();
    }
}
