package com.example.antipatterns.staticio.bad;

/**
 * The victim of the static I/O utility: this pricing rule cannot be unit
 * tested without /etc/prices.csv existing on the machine running the tests.
 *
 * Required fix: {@code staticio.good} — the catalog becomes a port; the file
 * is an adapter's secret.
 */
public class QuoteService {

    public int quoteCents(String sku, int quantity) {
        int unitPrice = PriceListLoader.load().getOrDefault(sku, 0); // I/O mid-logic
        int total = unitPrice * quantity;
        if (quantity >= 10) {
            total = total * 90 / 100; // the actual business rule, held hostage
        }
        return total;
    }
}
