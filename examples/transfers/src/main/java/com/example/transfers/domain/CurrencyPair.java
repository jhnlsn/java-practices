package com.example.transfers.domain;

import java.util.Currency;
import java.util.Objects;

public record CurrencyPair(Currency from, Currency to) {

    public CurrencyPair {
        Objects.requireNonNull(from, "from");
        Objects.requireNonNull(to, "to");
        if (from.equals(to)) {
            throw new IllegalArgumentException("pair must span two currencies: " + from);
        }
    }
}
