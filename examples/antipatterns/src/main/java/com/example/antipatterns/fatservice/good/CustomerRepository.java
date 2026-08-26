package com.example.antipatterns.fatservice.good;

import java.util.Optional;

/** Driven port — same shape as before; the structure around it changed. */
public interface CustomerRepository {

    Optional<Customer> findById(String id);

    void save(Customer customer);
}
