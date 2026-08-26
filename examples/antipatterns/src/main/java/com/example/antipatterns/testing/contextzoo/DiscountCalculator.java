package com.example.antipatterns.testing.contextzoo;

/** Pure logic — the kind of class people wrap Spring around anyway. */
public class DiscountCalculator {

    public int discountedCents(int priceCents, int percent) {
        if (percent < 0 || percent > 100) {
            throw new IllegalArgumentException("percent out of range: " + percent);
        }
        return priceCents * (100 - percent) / 100;
    }
}
