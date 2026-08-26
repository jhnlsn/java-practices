package com.example.transfers;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.testcontainers.containers.PostgreSQLContainer;

import com.example.transfers.support.IntegrationTest;

/**
 * Smoke test for the test support infrastructure itself: boots the full
 * application through {@code @IntegrationTest} and verifies the
 * Testcontainers-backed database is actually running.
 */
@IntegrationTest
class TransfersApplicationIT {

    @Autowired PostgreSQLContainer<?> postgres;

    @Test
    void applicationBootsWithRealDatabaseContainer() {
        assertThat(postgres.isRunning()).isTrue();
    }
}
