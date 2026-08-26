package com.example.antipatterns.testing.contextzoo.good;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

import com.example.antipatterns.testing.contextzoo.DiscountCalculator;

/**
 * The fix: pure logic gets a pure test (testing playbook §2's decision rule
 * — start at the lowest layer that can express the behavior). Microseconds,
 * no context, and room to actually cover the edge cases.
 */
public class DiscountCalculatorTest {

    private final DiscountCalculator calculator = new DiscountCalculator();

    @Test
    void appliesPercentageDiscount() {
        assertThat(calculator.discountedCents(10_00, 25)).isEqualTo(7_50);
    }

    @Test
    void rejectsPercentagesOutsideZeroToHundred() {
        assertThatThrownBy(() -> calculator.discountedCents(10_00, 101))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
