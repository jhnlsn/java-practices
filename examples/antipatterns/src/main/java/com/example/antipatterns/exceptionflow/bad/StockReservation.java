package com.example.antipatterns.exceptionflow.bad;

import java.util.Map;

/**
 * Exceptions as a branch instruction: the caller's try/catch is really an
 * if/else wearing a disguise, and tests end up asserting on exception types
 * instead of outcomes.
 *
 * Required fix: {@code exceptionflow.good} — the expected outcome becomes a
 * sealed value; exceptions are reserved for genuine aborts (see also
 * adversarial review §5 on {@code @Transactional} rollback semantics).
 */
public class StockReservation {

    private final Map<String, Integer> stock;

    public StockReservation(Map<String, Integer> stock) {
        this.stock = stock;
    }

    public void reserve(String sku, int quantity) {
        int available = stock.getOrDefault(sku, 0);
        if (available < quantity) {
            throw new InsufficientStockException(sku); // expected outcome as exception
        }
        stock.put(sku, available - quantity);
    }

    /** A typical caller: control flow via catch block. */
    public String reserveOrBackorder(String sku, int quantity) {
        try {
            reserve(sku, quantity);
            return "RESERVED";
        } catch (InsufficientStockException e) { // if/else in a trench coat
            return "BACKORDERED";
        }
    }
}
