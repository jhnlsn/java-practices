package com.example.transfers.domain;

import static com.example.transfers.support.Monies.EUR;
import static com.example.transfers.support.Monies.USD;
import static com.example.transfers.support.Monies.eur;
import static com.example.transfers.support.Monies.usd;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;

class ExchangeRateTest {

    private final ExchangeRate usdToEur =
            new ExchangeRate(new CurrencyPair(USD, EUR), new BigDecimal("0.9143"));

    @Test
    void convertsIntoTheTargetCurrency() {
        assertThat(usdToEur.convert(usd(100))).isEqualTo(eur("91.43"));
    }

    @Test
    void roundsHalfEvenToTargetCurrencyPrecision() {
        // 10.00 * 0.9145 = 9.145, exactly at the half. Banker's rounding goes
        // to the even neighbor, 9.14, where half-up would give 9.15.
        var rate = new ExchangeRate(new CurrencyPair(USD, EUR), new BigDecimal("0.9145"));

        assertThat(rate.convert(usd(10))).isEqualTo(eur("9.14"));
    }

    @Test
    void refusesMoneyTheRateWasNotQuotedFor() {
        assertThatThrownBy(() -> usdToEur.convert(eur(10)))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("rate is for");
    }

    @Test
    void refusesNonPositiveRates() {
        assertThatThrownBy(() -> new ExchangeRate(new CurrencyPair(USD, EUR), BigDecimal.ZERO))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
