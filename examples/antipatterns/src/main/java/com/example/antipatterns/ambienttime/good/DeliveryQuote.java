package com.example.antipatterns.ambienttime.good;

import java.time.Clock;
import java.time.LocalTime;
import java.util.random.RandomGenerator;

/**
 * The fix: time and randomness are dependencies (dev playbook core principle
 * #7, §3.6). Production wires {@code Clock.systemUTC()} and a real generator;
 * a test wires {@code Clock.fixed(...)} and a seeded generator, and every
 * branch becomes reachable and repeatable.
 */
public class DeliveryQuote {

    private final Clock clock;
    private final RandomGenerator jitter;

    public DeliveryQuote(Clock clock, RandomGenerator jitter) {
        this.clock = clock;
        this.jitter = jitter;
    }

    public int quoteCents() {
        int base = 500;
        if (LocalTime.now(clock).isAfter(LocalTime.of(22, 0))) {
            base += 300;
        }
        base += jitter.nextInt(50);
        return base;
    }
}
