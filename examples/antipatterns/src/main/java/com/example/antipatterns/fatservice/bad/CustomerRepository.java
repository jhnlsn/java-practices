package com.example.antipatterns.fatservice.bad;

import java.util.Optional;

public interface CustomerRepository {

    Optional<Customer> findById(String id);

    void save(Customer customer);
}
