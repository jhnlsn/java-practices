package com.example.transfers.adapter.persistence;

import java.math.BigDecimal;
import java.time.Instant;

import com.example.transfers.domain.TransferCompleted;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ledger_entries")
class LedgerEntryJpaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fromAccount;
    private String toAccount;
    private BigDecimal amount;
    private String currency;
    private Instant occurredAt;

    protected LedgerEntryJpaEntity() {
        // required by JPA
    }

    static LedgerEntryJpaEntity from(TransferCompleted event) {
        var entry = new LedgerEntryJpaEntity();
        entry.fromAccount = event.from().value();
        entry.toAccount = event.to().value();
        entry.amount = event.amount().amount();
        entry.currency = event.amount().currency().getCurrencyCode();
        entry.occurredAt = event.occurredAt();
        return entry;
    }
}
