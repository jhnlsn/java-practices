package com.example.antipatterns.testing.mockedowned.bad;

/** Minimal stand-in so the mock test compiles; the bug is in the service. */
public class Account {

    private final String id;
    private int balanceCents;

    public Account(String id, int balanceCents) {
        this.id = id;
        this.balanceCents = balanceCents;
    }

    public String id() { return id; }
    public int balanceCents() { return balanceCents; }
    public void setBalanceCents(int balanceCents) { this.balanceCents = balanceCents; }
}
