package com.example.antipatterns.entityasmodel.good;

import java.util.Optional;

/** Domain-owned port; the JPA adapter implements it. */
public interface Orders {

    Optional<Order> byId(long id);

    void save(Order order);
}
