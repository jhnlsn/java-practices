package com.example.antipatterns.staticio.good;

import java.util.Optional;

/** The port: domain vocabulary, no file-system words. */
public interface PriceCatalog {

    Optional<Integer> unitPriceCents(String sku);
}
