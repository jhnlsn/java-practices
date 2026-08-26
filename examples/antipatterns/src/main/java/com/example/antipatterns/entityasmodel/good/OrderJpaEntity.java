package com.example.antipatterns.entityasmodel.good;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * JPA's mutable, no-arg-constructed shape, quarantined in the adapter and
 * mapped at the edge. The wire shape would be a third type (a response DTO) —
 * see transfers/adapter/web and transfers/adapter/persistence for the full
 * runnable pattern including the Spring Data repository and port adapter.
 */
@Entity
@Table(name = "orders")
class OrderJpaEntity {

    @Id
    private Long id;

    @Enumerated(EnumType.STRING)
    private Order.Status status;

    protected OrderJpaEntity() {
        // required by JPA — and only JPA ever sees this type
    }

    static OrderJpaEntity fromDomain(Order order) {
        var entity = new OrderJpaEntity();
        entity.id = order.id();
        entity.status = order.status();
        return entity;
    }

    Order toDomain() {
        return new Order(id, status);
    }
}
