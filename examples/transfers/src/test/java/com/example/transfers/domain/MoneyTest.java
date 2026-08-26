package com.example.transfers.domain;

import static com.example.transfers.support.Monies.eur;
import static com.example.transfers.support.Monies.usd;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.math.BigDecimal;
import java.util.Currency;

import org.junit.jupiter.api.Test;

class MoneyTest {

    @Test
    void treatsDifferentScalesOfTheSameAmountAsEqual() {
        assertThat(usd("2.5")).isEqualTo(usd("2.50"));
    }

    @Test
    void rejectsAmountFinerThanCurrencyPrecision() {
        assertThatThrownBy(() -> usd("10.005"))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("precision");
    }

    @Test
    void rejectsPseudoCurrencies() {
        assertThatThrownBy(() -> new Money(BigDecimal.ONE, Currency.getInstance("XAU")))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("pseudo-currency");
    }

    @Test
    void addsAmountsInTheSameCurrency() {
        assertThat(usd("10.00").plus(usd("2.50"))).isEqualTo(usd("12.50"));
    }

    @Test
    void subtractsAmountsInTheSameCurrency() {
        assertThat(usd("10.00").minus(usd("2.50"))).isEqualTo(usd("7.50"));
    }

    @Test
    void ordersAmountsWithinTheSameCurrency() {
        assertThat(usd(50).isLessThan(usd(100))).isTrue();
        assertThat(usd(100).isLessThan(usd(100))).isFalse();
    }

    @Test
    void refusesArithmeticAcrossCurrencies() {
        assertThatThrownBy(() -> usd(10).plus(eur(10)))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("currency mismatch");
        assertThatThrownBy(() -> usd(10).minus(eur(10)))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> usd(10).isLessThan(eur(10)))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void supportsZeroDecimalCurrencies() {
        var jpy = Currency.getInstance("JPY");

        var total = new Money(new BigDecimal("100"), jpy).plus(new Money(new BigDecimal("50"), jpy));

        assertThat(total).isEqualTo(new Money(new BigDecimal("150"), jpy));
    }

    @Test
    void distinguishesPositiveZeroAndNegativeAmounts() {
        assertThat(usd(5).isPositive()).isTrue();
        assertThat(usd(0).isPositive()).isFalse();
        assertThat(usd(0).isNegative()).isFalse();
        assertThat(usd(-5).isNegative()).isTrue();
    }
}
