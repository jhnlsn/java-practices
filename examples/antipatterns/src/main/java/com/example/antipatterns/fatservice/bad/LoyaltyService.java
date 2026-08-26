package com.example.antipatterns.fatservice.bad;

import java.time.DayOfWeek;
import java.time.LocalDate;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * REJECT ON SIGHT — dev playbook §6:
 * <ul>
 *   <li>"@Service with business logic + repository calls interleaved"</li>
 *   <li>"Anemic domain + fat service"</li>
 *   <li>"LocalDateTime.now() inline"</li>
 * </ul>
 *
 * Why it breaks testability: the earning rules are welded to persistence, so
 * the only way to unit-test the GOLD doubling rule is to mock the repository
 * this service owns — which the testing playbook bans (§1.4). And the Sunday
 * bonus branch literally cannot be tested Monday through Saturday.
 *
 * Required fix: {@code fatservice.good} — rules move to a pure policy, time
 * becomes a dependency, the service shrinks to orchestration.
 */
@Service
public class LoyaltyService {

    private final CustomerRepository customers;

    public LoyaltyService(CustomerRepository customers) {
        this.customers = customers;
    }

    @Transactional
    public int awardPoints(String customerId, int purchaseCents) {
        Customer customer = customers.findById(customerId).orElseThrow();
        int points = purchaseCents / 100;                         // business rule
        if ("GOLD".equals(customer.getTier())) {                  // business rule
            points *= 2;                                          // business rule
        }
        if (LocalDate.now().getDayOfWeek() == DayOfWeek.SUNDAY) { // ambient time
            points += 10;                                         // untestable branch
        }
        customer.setPoints(customer.getPoints() + points);        // anemic mutation
        customers.save(customer);
        return points;
    }
}
