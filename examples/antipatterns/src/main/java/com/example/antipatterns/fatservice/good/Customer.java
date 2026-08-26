package com.example.antipatterns.fatservice.good;

import java.util.Objects;

/**
 * The fix for the anemic {@code bad.Customer}: an immutable value that owns
 * its own arithmetic. No setters — operations return new state, and an
 * invalid customer is unrepresentable (dev playbook core principles #5, #6).
 */
public record Customer(String id, Tier tier, int points) {

    public enum Tier { STANDARD, GOLD }

    public Customer {
        Objects.requireNonNull(id, "id");
        Objects.requireNonNull(tier, "tier");
        if (points < 0) {
            throw new IllegalArgumentException("points must not be negative: " + points);
        }
    }

    public Customer withAdditionalPoints(int additional) {
        return new Customer(id, tier, points + additional);
    }
}
