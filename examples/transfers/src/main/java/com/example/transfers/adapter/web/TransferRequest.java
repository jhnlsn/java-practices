package com.example.transfers.adapter.web;

import java.math.BigDecimal;
import java.util.Currency;

import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.Money;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

/**
 * Wire DTO — adapter-private (development playbook §2.2). Shape-level checks
 * happen here via Bean Validation; value-level rules stay in the domain types
 * this converts to.
 */
record TransferRequest(
        @NotBlank String from,
        @NotBlank String to,
        @NotNull @Positive BigDecimal amount,
        @NotBlank String currency) {

    @AssertTrue(message = "source and target accounts must differ")
    boolean isBetweenDistinctAccounts() {
        // Null-safe so @NotBlank reports missing fields instead of this rule.
        return from == null || to == null || !from.equals(to);
    }

    AccountId fromId() {
        return new AccountId(from);
    }

    AccountId toId() {
        return new AccountId(to);
    }

    Money toMoney() {
        try {
            return new Money(amount, Currency.getInstance(currency));
        } catch (IllegalArgumentException e) {
            throw new MalformedTransferRequest(e.getMessage());
        }
    }
}
