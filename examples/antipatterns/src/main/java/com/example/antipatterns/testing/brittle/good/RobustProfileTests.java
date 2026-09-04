package com.example.antipatterns.testing.brittle.good;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.example.antipatterns.testing.brittle.ProfileApi;
import com.jayway.jsonpath.JsonPath;

/**
 * The fixes: assert the field under test (new payload fields no longer break
 * unrelated tests); fresh state per test instance (JUnit creates a new
 * instance per method, so order cannot matter). And the flaky email test is
 * gone entirely — the playbook's rule is fix or delete; quarantine exists
 * only with a ticket and an owner, and deletion is a recorded human
 * decision (testing playbook §7.4).
 */
public class RobustProfileTests {

    private final ProfileApi api = new ProfileApi();
    private final List<Long> seenIds = new ArrayList<>(); // per-test instance state

    @Test
    void returnsProfileName() {
        String profile = api.fetchProfile(7);

        assertThat(JsonPath.<String>read(profile, "$.name")).isEqualTo("Ada");
    }

    @Test
    void tracksEachRequestedProfile() {
        seenIds.add(8L);

        assertThat(seenIds).containsExactly(8L);
    }
}
