package com.example.transfers.domain;

import java.util.Objects;

/**
 * Development playbook §2.1 — aggregate root. The only place in the domain
 * where mutation is allowed (core principle #6), and every mutation preserves
 * the aggregate's invariant: the balance never goes negative.
 */
public final class Account {

    private final AccountId id;
    private final AccountStatus status;
    private Money balance;

    public Account(AccountId id, AccountStatus status, Money balance) {
        this.id = Objects.requireNonNull(id, "id");
        this.status = Objects.requireNonNull(status, "status");
        this.balance = Objects.requireNonNull(balance, "balance");
        if (balance.isNegative()) {
            throw new IllegalArgumentException("balance must not be negative: " + balance);
        }
    }

    /**
     * Guards the invariant; it does not make the business decision. Whether a
     * transfer is allowed is {@link TransferPolicy}'s call — if this method
     * throws, orchestration skipped the policy, which is a bug, and invariant
     * violations are exceptions, not result values.
     */
    public void debit(Money amount) {
        requirePositive(amount);
        if (balance.isLessThan(amount)) {
            throw new IllegalStateException(
                    "insufficient funds in %s: balance %s, debit %s".formatted(id, balance, amount));
        }
        balance = balance.minus(amount);
    }

    public void credit(Money amount) {
        requirePositive(amount);
        balance = balance.plus(amount);
    }

    public AccountId id() {
        return id;
    }

    public AccountStatus status() {
        return status;
    }

    public Money balance() {
        return balance;
    }

    private static void requirePositive(Money amount) {
        if (!amount.isPositive()) {
            throw new IllegalArgumentException("amount must be positive: " + amount);
        }
    }
}
