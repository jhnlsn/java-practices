package com.example.transfers.domain;

import java.math.BigDecimal;
import java.util.Currency;
import java.util.Objects;

/**
 * Development playbook §3.1 — value object: a record with a validating
 * constructor. No setters; operations return new instances. Illegal states
 * (null parts, sub-cent precision, pseudo-currencies) are unrepresentable.
 */
public record Money(BigDecimal amount, Currency currency) {

    public Money {
        Objects.requireNonNull(amount, "amount");
        Objects.requireNonNull(currency, "currency");
        int precision = currency.getDefaultFractionDigits();
        if (precision < 0) {
            throw new IllegalArgumentException("pseudo-currency not supported: " + currency);
        }
        if (amount.scale() > precision) {
            throw new IllegalArgumentException(
                    "scale %d exceeds %s precision of %d".formatted(amount.scale(), currency, precision));
        }
        // Canonical scale, so 2.5 USD and 2.50 USD are the same value.
        amount = amount.setScale(precision);
    }

    public Money plus(Money other) {
        requireSameCurrency(other);
        return new Money(amount.add(other.amount), currency);
    }

    public Money minus(Money other) {
        requireSameCurrency(other);
        return new Money(amount.subtract(other.amount), currency);
    }

    public boolean isLessThan(Money other) {
        requireSameCurrency(other);
        return amount.compareTo(other.amount) < 0;
    }

    public boolean isPositive() {
        return amount.signum() > 0;
    }

    public boolean isNegative() {
        return amount.signum() < 0;
    }

    private void requireSameCurrency(Money other) {
        if (!currency.equals(other.currency)) {
            throw new IllegalArgumentException(
                    "currency mismatch: %s vs %s".formatted(currency, other.currency));
        }
    }
}
