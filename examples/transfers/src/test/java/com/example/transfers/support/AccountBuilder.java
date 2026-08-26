package com.example.transfers.support;

import com.example.transfers.domain.Account;
import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.AccountStatus;
import com.example.transfers.domain.Money;

/**
 * Testing playbook §3.3 — test data builder. A test states only the fields it
 * cares about; everything else comes from defaults.
 */
public class AccountBuilder {

    private AccountId id = new AccountId("ACC-1");
    private AccountStatus status = AccountStatus.ACTIVE;
    private Money balance = Monies.usd(100);

    public static AccountBuilder anAccount() {
        return new AccountBuilder();
    }

    public AccountBuilder withId(String id) {
        this.id = new AccountId(id);
        return this;
    }

    public AccountBuilder withBalance(Money balance) {
        this.balance = balance;
        return this;
    }

    public AccountBuilder suspended() {
        this.status = AccountStatus.SUSPENDED;
        return this;
    }

    public Account build() {
        return new Account(id, status, balance);
    }
}
