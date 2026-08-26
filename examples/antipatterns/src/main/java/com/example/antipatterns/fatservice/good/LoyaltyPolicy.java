package com.example.antipatterns.fatservice.good;

import java.time.DayOfWeek;
import java.time.LocalDate;

/**
 * The extracted rules — pure, instantiable with {@code new}, testable in
 * microseconds with no mocks and no container (testing playbook §4.1). The
 * "untestable Sunday branch" is now just another input.
 */
public class LoyaltyPolicy {

    public int pointsFor(Customer customer, int purchaseCents, LocalDate purchaseDate) {
        int points = purchaseCents / 100;
        if (customer.tier() == Customer.Tier.GOLD) {
            points *= 2;
        }
        if (purchaseDate.getDayOfWeek() == DayOfWeek.SUNDAY) {
            points += 10;
        }
        return points;
    }
}
