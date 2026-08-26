package com.example.transfers.domain.port;

import com.example.transfers.domain.TransferCompleted;

/**
 * Development playbook §3.3 — driven port for event publication. How events
 * leave the process (broker, outbox table, log) is an adapter concern.
 */
public interface LedgerEvents {

    void publish(TransferCompleted event);
}
