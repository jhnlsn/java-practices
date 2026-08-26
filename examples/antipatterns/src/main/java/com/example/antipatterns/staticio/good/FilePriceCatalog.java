package com.example.antipatterns.staticio.good;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * The adapter: the same file-reading code, now behind the port where it can
 * be swapped for an in-memory implementation in unit tests — or a database
 * next year without touching a single caller.
 */
public class FilePriceCatalog implements PriceCatalog {

    private final Map<String, Integer> prices;

    public FilePriceCatalog(Path priceList) {
        try {
            Map<String, Integer> loaded = new HashMap<>();
            for (String line : Files.readAllLines(priceList)) {
                var parts = line.split(",");
                loaded.put(parts[0], Integer.parseInt(parts[1]));
            }
            this.prices = loaded;
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Override
    public Optional<Integer> unitPriceCents(String sku) {
        return Optional.ofNullable(prices.get(sku));
    }
}
