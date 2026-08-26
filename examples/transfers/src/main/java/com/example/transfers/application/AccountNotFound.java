package com.example.transfers.application;

import com.example.transfers.domain.AccountId;

/**
 * Referencing an account that doesn't exist is not a business decision the
 * domain weighs — it aborts the operation (and its transaction). Aborts are
 * exceptions; decisions are {@link TransferResult} values.
 */
public class AccountNotFound extends RuntimeException {

    private final AccountId accountId;

    public AccountNotFound(AccountId accountId) {
        super("account not found: " + accountId.value());
        this.accountId = accountId;
    }

    public AccountId accountId() {
        return accountId;
    }
}
