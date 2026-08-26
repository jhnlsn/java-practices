package com.example.antipatterns.staticio.good;

/**
 * The business rule, freed: a unit test constructs this with a two-line
 * lambda catalog ({@code sku -> Optional.of(100)}) and asserts the bulk
 * discount in microseconds.
 */
public class QuoteService {

    private final PriceCatalog catalog;

    public QuoteService(PriceCatalog catalog) {
        this.catalog = catalog;
    }

    public int quoteCents(String sku, int quantity) {
        int unitPrice = catalog.unitPriceCents(sku).orElse(0);
        int total = unitPrice * quantity;
        if (quantity >= 10) {
            total = total * 90 / 100;
        }
        return total;
    }
}
