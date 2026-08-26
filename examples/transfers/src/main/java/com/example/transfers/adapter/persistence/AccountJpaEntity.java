package com.example.transfers.adapter.persistence;

import java.math.BigDecimal;
import java.util.Currency;

import com.example.transfers.domain.Account;
import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.AccountStatus;
import com.example.transfers.domain.Money;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Development playbook §2.2 — JPA entity, adapter-private, never leaks
 * inward. It happily meets JPA's demands (no-arg constructor, mutability)
 * precisely so the domain {@link Account} never has to.
 */
@Entity
@Table(name = "accounts")
class AccountJpaEntity {

    @Id
    private String id;

    private BigDecimal balance;

    private String currency;

    @Enumerated(EnumType.STRING)
    private AccountStatus status;

    protected AccountJpaEntity() {
        // required by JPA
    }

    private AccountJpaEntity(String id, BigDecimal balance, String currency, AccountStatus status) {
        this.id = id;
        this.balance = balance;
        this.currency = currency;
        this.status = status;
    }

    static AccountJpaEntity fromDomain(Account account) {
        return new AccountJpaEntity(
                account.id().value(),
                account.balance().amount(),
                account.balance().currency().getCurrencyCode(),
                account.status());
    }

    Account toDomain() {
        // The numeric(19,4) column hands back scale 4; Money's canonical scale
        // is the currency's. Persistence quirks are normalized here, at the edge.
        return new Account(
                new AccountId(id),
                status,
                new Money(balance.stripTrailingZeros(), Currency.getInstance(currency)));
    }
}
