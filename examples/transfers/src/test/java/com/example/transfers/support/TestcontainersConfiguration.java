package com.example.transfers.support;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.context.annotation.Bean;
import org.testcontainers.containers.PostgreSQLContainer;

/**
 * Testing playbook §3.2 — real infrastructure for integration tests. The test
 * database is the same engine and major version as production; H2 is banned
 * (§3.1).
 */
@TestConfiguration(proxyBeanMethods = false)
public class TestcontainersConfiguration {

    @Bean
    @ServiceConnection
    PostgreSQLContainer<?> postgres() {
        return new PostgreSQLContainer<>("postgres:16")
                .withReuse(true); // requires testcontainers.reuse.enable=true in ~/.testcontainers.properties
    }

    // Add @ServiceConnection beans for Kafka, Redis, etc. as the project needs them.
}
