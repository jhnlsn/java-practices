package com.example.transfers.domain;

import java.util.Objects;

public record AccountId(String value) {

    public AccountId {
        Objects.requireNonNull(value, "value");
        if (value.isBlank()) {
            throw new IllegalArgumentException("account id must not be blank");
        }
    }
}
