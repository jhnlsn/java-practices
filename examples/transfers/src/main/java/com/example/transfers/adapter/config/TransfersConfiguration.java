package com.example.transfers.adapter.config;

import java.time.Clock;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

import com.example.transfers.domain.TransferPolicy;

/**
 * Development playbook §3.6 — wiring lives at the edge. Domain classes carry
 * no annotations, so their beans are declared here.
 */
@Configuration(proxyBeanMethods = false)
@EnableAsync
class TransfersConfiguration {

    @Bean
    TransferPolicy transferPolicy() {
        return new TransferPolicy();
    }

    @Bean
    Clock clock() {
        return Clock.systemUTC(); // tests inject Clock.fixed(...) instead
    }
}
