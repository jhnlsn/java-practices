package com.example.antipatterns.staticio.bad;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

/**
 * REJECT ON SIGHT — dev playbook §6: "Static utility with I/O". A static
 * call site can't be swapped, so every caller inherits the file system as a
 * hidden dependency.
 */
public final class PriceListLoader {

    private PriceListLoader() {}

    public static Map<String, Integer> load() {
        try {
            Map<String, Integer> prices = new HashMap<>();
            for (String line : Files.readAllLines(Path.of("/etc/prices.csv"))) {
                var parts = line.split(",");
                prices.put(parts[0], Integer.parseInt(parts[1]));
            }
            return prices;
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
