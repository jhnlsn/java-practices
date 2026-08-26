package com.example.transfers.application;

import java.util.Objects;

import com.example.transfers.domain.RejectionReason;

/**
 * Outcome of a transfer request, as a value. A rejection is an expected
 * business outcome, not an exception — the adapter decides what a rejection
 * looks like on the wire (development playbook §3.2 note).
 */
public sealed interface TransferResult {

    record Completed() implements TransferResult {}

    record Rejected(RejectionReason reason) implements TransferResult {
        public Rejected {
            Objects.requireNonNull(reason, "reason");
        }
    }

    static TransferResult completed() {
        return new Completed();
    }

    static TransferResult rejected(RejectionReason reason) {
        return new Rejected(reason);
    }
}
