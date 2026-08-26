package com.example.antipatterns.entityasmodel.good;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * The use case the bad controller was missing: load, decide (in the domain),
 * save. The cancellation rule is now testable without HTTP, and the
 * controller has nothing left to get wrong.
 */
@Service
public class CancelOrderUseCase {

    private final Orders orders;

    public CancelOrderUseCase(Orders orders) {
        this.orders = orders;
    }

    @Transactional
    public Order.CancellationResult cancel(long orderId) {
        var order = orders.byId(orderId).orElseThrow();
        var result = order.cancel();
        orders.save(order);
        return result;
    }
}
