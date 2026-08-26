package com.example.antipatterns.testing.sleepyasync.bad;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

import com.example.antipatterns.testing.sleepyasync.AuditLog;

/**
 * REJECT ON SIGHT — testing playbook §6.1: "Thread.sleep for async". The
 * playbook calls this a build-breaking offense (§4.5) because it is flaky
 * and slow <em>simultaneously</em>: too short on a loaded CI runner and the
 * test fails spuriously; long enough to be safe and every run pays the full
 * two seconds whether the work took 5ms or not.
 *
 * Required fix: {@code testing.sleepyasync.good} — await the condition.
 */
public class SleepingAuditTest {

    @Test
    void drainsSubmittedEvents() throws InterruptedException {
        var audit = new AuditLog();
        audit.submit("transfer-completed");

        Thread.sleep(2_000); // hope 2s is enough, pay 2s every time

        assertThat(audit.pendingEvents()).isEmpty();
    }
}
