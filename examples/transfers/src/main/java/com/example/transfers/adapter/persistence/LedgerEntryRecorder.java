package com.example.transfers.adapter.persistence;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

import com.example.transfers.domain.TransferCompleted;

/**
 * Persists a ledger row for every completed transfer. Listens for the domain
 * event after the transfer's transaction commits and runs on the async
 * executor, so the ledger write can neither delay nor roll back the transfer.
 * The asynchrony is what the integration test's Awaitility assertion
 * (testing playbook §4.5) exists to handle.
 */
@Component
class LedgerEntryRecorder {

    private final LedgerEntryJpaRepository ledger;

    LedgerEntryRecorder(LedgerEntryJpaRepository ledger) {
        this.ledger = ledger;
    }

    @Async
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    void record(TransferCompleted event) {
        ledger.save(LedgerEntryJpaEntity.from(event));
    }
}
