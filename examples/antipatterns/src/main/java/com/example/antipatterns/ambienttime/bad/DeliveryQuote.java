package com.example.antipatterns.ambienttime.bad;

import java.time.LocalTime;
import java.util.Random;

/**
 * REJECT ON SIGHT — dev playbook §6: "LocalDateTime.now() / new Random()
 * inline". The late-night surcharge branch can only be tested by running the
 * suite after 10pm, and the jitter makes every assertion nondeterministic.
 *
 * Required fix: {@code ambienttime.good} — time and randomness enter through
 * the constructor.
 */
public class DeliveryQuote {

    public int quoteCents() {
        int base = 500;
        if (LocalTime.now().isAfter(LocalTime.of(22, 0))) { // untestable at 3pm
            base += 300;
        }
        base += new Random().nextInt(50); // different answer every run
        return base;
    }
}
