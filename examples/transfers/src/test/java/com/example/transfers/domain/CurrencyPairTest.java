package com.example.transfers.domain;

import static com.example.transfers.support.Monies.USD;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

class CurrencyPairTest {

    @Test
    void rejectsPairOfIdenticalCurrencies() {
        assertThatThrownBy(() -> new CurrencyPair(USD, USD))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
