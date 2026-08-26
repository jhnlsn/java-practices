package com.example.antipatterns.exceptionflow.bad;

/**
 * REJECT ON SIGHT — dev playbook §6: "Business exceptions for expected
 * outcomes". Running low on stock is a normal Tuesday, not an exceptional
 * condition — yet it's invisible in every method signature that can produce
 * it, costs a stack trace on a hot path, and the compiler can't tell any
 * caller they forgot to handle it.
 */
public class InsufficientStockException extends RuntimeException {

    public InsufficientStockException(String sku) {
        super("insufficient stock for " + sku);
    }
}
