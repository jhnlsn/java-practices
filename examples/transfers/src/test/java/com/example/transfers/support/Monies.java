package com.example.transfers.support;

import java.math.BigDecimal;
import java.util.Currency;

import com.example.transfers.domain.Money;

/**
 * Money fixtures for tests. Production {@link Money} deliberately has no
 * currency-defaulting factory — the default lives here, in test scope, where
 * ambient convenience can't leak into domain code.
 */
public final class Monies {

    public static final Currency USD = Currency.getInstance("USD");
    public static final Currency EUR = Currency.getInstance("EUR");

    private Monies() {}

    public static Money usd(long amount) {
        return new Money(BigDecimal.valueOf(amount), USD);
    }

    public static Money usd(String amount) {
        return new Money(new BigDecimal(amount), USD);
    }

    public static Money eur(long amount) {
        return new Money(BigDecimal.valueOf(amount), EUR);
    }

    public static Money eur(String amount) {
        return new Money(new BigDecimal(amount), EUR);
    }
}
