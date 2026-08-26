package com.example.antipatterns.exceptionflow.good;

import java.util.Map;

/**
 * The fix: both outcomes are values of a sealed type, so every caller must
 * handle both (an unhandled case is a compile error, not a 2am page), and
 * tests compare whole outcome values. Compare transfers'
 * {@code TransferDecision} for the full pattern.
 */
public class StockReservation {

    public sealed interface Result {
        record Reserved() implements Result {}
        record Backordered(int shortfall) implements Result {}
    }

    private final Map<String, Integer> stock;

    public StockReservation(Map<String, Integer> stock) {
        this.stock = stock;
    }

    public Result reserve(String sku, int quantity) {
        int available = stock.getOrDefault(sku, 0);
        if (available < quantity) {
            return new Result.Backordered(quantity - available);
        }
        stock.put(sku, available - quantity);
        return new Result.Reserved();
    }
}
