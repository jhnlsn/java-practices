package com.example.transfers.domain;

import java.time.Instant;
import java.util.Objects;

/**
 * Domain event recording a completed transfer. {@code occurredAt} is supplied
 * by the caller from an injected {@link java.time.Clock} — never read from
 * the wall clock here (development playbook core principle #7).
 */
public record TransferCompleted(AccountId from, AccountId to, Money amount, Instant occurredAt) {

    public TransferCompleted {
        Objects.requireNonNull(from, "from");
        Objects.requireNonNull(to, "to");
        Objects.requireNonNull(amount, "amount");
        Objects.requireNonNull(occurredAt, "occurredAt");
    }
}
