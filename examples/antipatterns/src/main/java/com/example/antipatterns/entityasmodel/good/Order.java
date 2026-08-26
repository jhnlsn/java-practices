package com.example.antipatterns.entityasmodel.good;

import java.util.Objects;

/**
 * The domain order: plain Java, no framework imports, a real state machine
 * instead of a String, and a decision returned as a sealed value. JPA's
 * demands are met by {@code OrderJpaEntity} instead, and mapped at the edge.
 */
public final class Order {

    public enum Status { OPEN, SHIPPED, CANCELLED }

    public sealed interface CancellationResult {
        record Cancelled() implements CancellationResult {}
        record AlreadyShipped() implements CancellationResult {}
    }

    private final long id;
    private Status status;

    public Order(long id, Status status) {
        this.id = id;
        this.status = Objects.requireNonNull(status, "status");
    }

    public CancellationResult cancel() {
        if (status == Status.SHIPPED) {
            return new CancellationResult.AlreadyShipped();
        }
        status = Status.CANCELLED;
        return new CancellationResult.Cancelled();
    }

    public long id() {
        return id;
    }

    public Status status() {
        return status;
    }
}
