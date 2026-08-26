package com.example.transfers.domain;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

class AccountIdTest {

    @Test
    void rejectsBlankIds() {
        assertThatThrownBy(() -> new AccountId(" "))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
