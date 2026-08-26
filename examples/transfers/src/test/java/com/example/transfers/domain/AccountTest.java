package com.example.transfers.domain;

import static com.example.transfers.support.AccountBuilder.anAccount;
import static com.example.transfers.support.Monies.usd;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

class AccountTest {

    @Test
    void debitReducesTheBalance() {
        var account = anAccount().withBalance(usd(100)).build();

        account.debit(usd(40));

        assertThat(account.balance()).isEqualTo(usd(60));
    }

    @Test
    void creditIncreasesTheBalance() {
        var account = anAccount().withBalance(usd(100)).build();

        account.credit(usd(40));

        assertThat(account.balance()).isEqualTo(usd(140));
    }

    @Test
    void refusesDebitBeyondTheBalance() {
        // The aggregate guards its invariant with an exception: a transfer's
        // acceptability is TransferPolicy's decision, so reaching this guard
        // means orchestration skipped the policy — a bug, not an outcome.
        var account = anAccount().withBalance(usd(50)).build();

        assertThatThrownBy(() -> account.debit(usd(100)))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("insufficient funds");
    }

    @Test
    void refusesNonPositiveAmounts() {
        var account = anAccount().build();

        assertThatThrownBy(() -> account.debit(usd(0)))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> account.credit(usd(-5)))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
