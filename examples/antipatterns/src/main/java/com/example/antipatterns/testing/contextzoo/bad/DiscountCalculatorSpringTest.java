package com.example.antipatterns.testing.contextzoo.bad;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import com.example.antipatterns.testing.contextzoo.DiscountCalculator;

/**
 * REJECT ON SIGHT — testing playbook §6.1: "@SpringBootTest for a pure logic
 * test" and "Unique context config per test class". Two offenses at once:
 * the whole application boots to check arithmetic (100x slower than needed),
 * and the bespoke properties/profile combination below forks a NEW context
 * that Spring's cache can never share with any other test class — this exact
 * annotation stack, copy-pasted across a codebase, is where 40-minute builds
 * come from.
 *
 * Required fix: {@code testing.contextzoo.good}; for tests that genuinely
 * need the context, one shared meta-annotation — transfers'
 * {@code @IntegrationTest}.
 */
@SpringBootTest(properties = "discount.rounding=banker")
@TestPropertySource(properties = "some.other.flag=true")
@ActiveProfiles("discount-test")
public class DiscountCalculatorSpringTest {

    @Test
    void appliesPercentageDiscount() {
        assertThat(new DiscountCalculator().discountedCents(10_00, 25)).isEqualTo(7_50);
    }
}
