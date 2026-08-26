package com.example.antipatterns.godusecase.good;

import com.example.antipatterns.godusecase.Ports.FraudChecks;
import com.example.antipatterns.godusecase.Ports.Inventory;
import com.example.antipatterns.godusecase.Ports.Payments;
import com.example.antipatterns.godusecase.Ports.Pricing;
import com.example.antipatterns.godusecase.Ports.Taxes;

/**
 * One business operation, and only its own dependencies. Its integration
 * test stands up five collaborators, not ten, and a change to refunds can no
 * longer break checkout.
 */
public class PlaceOrderUseCase {

    private final Inventory inventory;
    private final Pricing pricing;
    private final Taxes taxes;
    private final Payments payments;
    private final FraudChecks fraudChecks;

    public PlaceOrderUseCase(Inventory inventory, Pricing pricing, Taxes taxes,
                             Payments payments, FraudChecks fraudChecks) {
        this.inventory = inventory;
        this.pricing = pricing;
        this.taxes = taxes;
        this.payments = payments;
        this.fraudChecks = fraudChecks;
    }

    public void placeOrder() { /* the same placeOrder logic, at home */ }
}
