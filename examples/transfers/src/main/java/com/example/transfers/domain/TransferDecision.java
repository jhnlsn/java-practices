package com.example.transfers.domain;

import java.util.Objects;

/**
 * Development playbook §3.2 — expected business outcomes are values, not
 * exceptions. Sealed + pattern matching makes an unhandled case a compile
 * error at every call site, not a missing test.
 */
public sealed interface TransferDecision {

    record Approved() implements TransferDecision {}

    record Rejected(RejectionReason reason) implements TransferDecision {
        public Rejected {
            Objects.requireNonNull(reason, "reason");
        }
    }

    static TransferDecision approved() {
        return new Approved();
    }

    static TransferDecision rejected(RejectionReason reason) {
        return new Rejected(reason);
    }
}
