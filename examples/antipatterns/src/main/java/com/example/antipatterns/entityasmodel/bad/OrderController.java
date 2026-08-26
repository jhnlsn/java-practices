package com.example.antipatterns.entityasmodel.bad;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REJECT ON SIGHT — dev playbook §6: "Controller calling repository
 * directly". The cancellation rule has nowhere to live but here, so testing
 * it requires HTTP machinery; and the JPA entity returned from the mapping
 * IS the response schema, by accident.
 *
 * Required fix: {@code entityasmodel.good.CancelOrderUseCase} — introduce a
 * use case; the controller translates and delegates.
 */
@RestController
public class OrderController {

    private final OrderRepository orders;

    public OrderController(OrderRepository orders) {
        this.orders = orders;
    }

    @PostMapping("/orders/{id}/cancel")
    Order cancel(@PathVariable Long id) {
        Order order = orders.findById(id).orElseThrow();
        if (!"SHIPPED".equals(order.getStatus())) { // business rule in the controller
            order.setStatus("CANCELLED");
            orders.save(order);
        }
        return order; // JPA entity straight onto the wire
    }
}
