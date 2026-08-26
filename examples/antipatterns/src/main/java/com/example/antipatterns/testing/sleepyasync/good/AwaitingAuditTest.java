package com.example.antipatterns.testing.sleepyasync.good;

import static org.assertj.core.api.Assertions.assertThat;
import static org.awaitility.Awaitility.await;

import java.time.Duration;

import org.junit.jupiter.api.Test;

import com.example.antipatterns.testing.sleepyasync.AuditLog;

/**
 * The fix (testing playbook §4.5): assert the condition as soon as it holds,
 * with a generous ceiling that only slow runs ever approach. Fast when the
 * system is fast, patient when it isn't, and the failure message says what
 * was still pending. Runnable version: the ledger assertion in
 * transfers/TransferFlowIT.
 */
public class AwaitingAuditTest {

    @Test
    void drainsSubmittedEvents() {
        var audit = new AuditLog();
        audit.submit("transfer-completed");

        await().atMost(Duration.ofSeconds(5))
               .untilAsserted(() -> assertThat(audit.pendingEvents()).isEmpty());
    }
}
