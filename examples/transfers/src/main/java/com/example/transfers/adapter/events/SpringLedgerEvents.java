package com.example.transfers.adapter.events;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import com.example.transfers.domain.TransferCompleted;
import com.example.transfers.domain.port.LedgerEvents;

/**
 * Implements the {@link LedgerEvents} port with Spring's in-process event
 * bus. Swapping this for Kafka or an outbox table touches nothing inward of
 * the port.
 */
@Component
class SpringLedgerEvents implements LedgerEvents {

    private final ApplicationEventPublisher publisher;

    SpringLedgerEvents(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    @Override
    public void publish(TransferCompleted event) {
        publisher.publishEvent(event);
    }
}
