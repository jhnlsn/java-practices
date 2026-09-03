package com.example.antipatterns.testing.mockedowned.bad;

/**
 * Contains the classic bug a mock-based test cannot see: the debit line
 * ADDS instead of subtracting. Watch which test below notices.
 */
public class TransferService {

    private final AccountRepository accounts;

    public TransferService(AccountRepository accounts) {
        this.accounts = accounts;
    }

    public void transfer(String fromId, String toId, int amountCents) {
        Account from = accounts.byId(fromId).orElseThrow();
        Account to = accounts.byId(toId).orElseThrow();
        from.setBalanceCents(from.balanceCents() + amountCents); // BUG: should subtract
        to.setBalanceCents(to.balanceCents() + amountCents);
        accounts.save(from);
        accounts.save(to);
    }
}
