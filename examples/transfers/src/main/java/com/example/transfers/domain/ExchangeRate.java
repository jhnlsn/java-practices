package com.example.transfers.domain;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

/**
 * A rate quoted for one {@link CurrencyPair}. Conversion is domain logic and
 * lives here — not in the HTTP client that fetched the rate (development
 * playbook core principle #4: logic and I/O never share a class).
 */
public record ExchangeRate(CurrencyPair pair, BigDecimal rate) {

    public ExchangeRate {
        Objects.requireNonNull(pair, "pair");
        Objects.requireNonNull(rate, "rate");
        if (rate.signum() <= 0) {
            throw new IllegalArgumentException("rate must be positive: " + rate);
        }
    }

    public Money convert(Money source) {
        if (!source.currency().equals(pair.from())) {
            throw new IllegalArgumentException(
                    "rate is for %s, not %s".formatted(pair.from(), source.currency()));
        }
        var converted = source.amount()
                .multiply(rate)
                .setScale(pair.to().getDefaultFractionDigits(), RoundingMode.HALF_EVEN);
        return new Money(converted, pair.to());
    }
}
