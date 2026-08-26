package com.example.antipatterns.fatservice.good;

import java.time.Clock;
import java.time.LocalDate;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * The required fix from dev playbook §6 applied: rules extracted to
 * {@link LoyaltyPolicy}, time injected as {@link Clock}, the service reduced
 * to a sequence of steps with no business {@code if}s. The rules are
 * unit-tested through the policy; this orchestration is covered once by an
 * integration test.
 */
@Service
public class LoyaltyService {

    private final CustomerRepository customers;
    private final LoyaltyPolicy policy;
    private final Clock clock;

    public LoyaltyService(CustomerRepository customers, LoyaltyPolicy policy, Clock clock) {
        this.customers = customers;
        this.policy = policy;
        this.clock = clock;
    }

    @Transactional
    public int awardPoints(String customerId, int purchaseCents) {
        var customer = customers.findById(customerId).orElseThrow();
        int points = policy.pointsFor(customer, purchaseCents, LocalDate.now(clock));
        customers.save(customer.withAdditionalPoints(points));
        return points;
    }
}
