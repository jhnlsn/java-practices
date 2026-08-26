package com.example.antipatterns.testing.brittle.bad;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import com.example.antipatterns.testing.brittle.ProfileApi;

/**
 * REJECT ON SIGHT — testing playbook §6.1, three rows in one file:
 * <ul>
 *   <li>"Asserting entire JSON payloads for one field" — the name test fails
 *       when anyone adds a field, renames {@code lastSeen}, or reorders keys;
 *       its failure diff is a wall of JSON with the signal buried.</li>
 *   <li>"Shared fixtures mutated across tests" — {@code seenIds} is static
 *       and grows across tests, so the count assertion only passes in one
 *       execution order.</li>
 *   <li>"@Disabled without linked ticket" — nobody will ever come back to
 *       this; it is silent coverage loss wearing an annotation.</li>
 * </ul>
 *
 * Required fix: {@code testing.brittle.good}.
 */
public class BrittleProfileTests {

    private static final ProfileApi API = new ProfileApi();
    private static final List<Long> seenIds = new ArrayList<>(); // shared, mutable, static

    @Test
    void returnsProfileName() {
        seenIds.add(7L);

        // Whole-payload equality: one assertion, coupled to every field.
        assertThat(API.fetchProfile(7))
                .isEqualTo("{\"id\":7,\"name\":\"Ada\",\"email\":\"ada@example.com\","
                        + "\"lastSeen\":\"2026-08-25T12:00:00Z\"}");
    }

    @Test
    void tracksEachRequestedProfile() {
        seenIds.add(8L);

        assertThat(seenIds).hasSize(2); // only true if the other test ran first
    }

    @Disabled("flaky sometimes")
    @Test
    void returnsProfileEmail() {
        // rot: no ticket, no owner, no way back
    }
}
