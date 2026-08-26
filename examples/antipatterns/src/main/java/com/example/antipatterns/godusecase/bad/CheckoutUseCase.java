package com.example.antipatterns.godusecase.bad;

import com.example.antipatterns.godusecase.Ports.AuditTrail;
import com.example.antipatterns.godusecase.Ports.CustomerNotifications;
import com.example.antipatterns.godusecase.Ports.FraudChecks;
import com.example.antipatterns.godusecase.Ports.Inventory;
import com.example.antipatterns.godusecase.Ports.Payments;
import com.example.antipatterns.godusecase.Ports.Pricing;
import com.example.antipatterns.godusecase.Ports.Promotions;
import com.example.antipatterns.godusecase.Ports.Refunds;
import com.example.antipatterns.godusecase.Ports.Shipping;
import com.example.antipatterns.godusecase.Ports.Taxes;

/**
 * REJECT ON SIGHT — dev playbook §6: "God use case (10+ dependencies)". No
 * single business operation needs all ten of these; the class is several use
 * cases sharing one constructor. Its integration tests must stand up
 * everything to exercise anything, and every feature touches this file.
 *
 * Required fix: {@code godusecase.good} — split by business operation.
 */
public class CheckoutUseCase {

    private final Inventory inventory;
    private final Pricing pricing;
    private final Payments payments;
    private final Refunds refunds;
    private final Shipping shipping;
    private final Taxes taxes;
    private final Promotions promotions;
    private final CustomerNotifications notifications;
    private final FraudChecks fraudChecks;
    private final AuditTrail audit;

    public CheckoutUseCase(Inventory inventory, Pricing pricing, Payments payments,
                           Refunds refunds, Shipping shipping, Taxes taxes,
                           Promotions promotions, CustomerNotifications notifications,
                           FraudChecks fraudChecks, AuditTrail audit) {
        this.inventory = inventory;
        this.pricing = pricing;
        this.payments = payments;
        this.refunds = refunds;
        this.shipping = shipping;
        this.taxes = taxes;
        this.promotions = promotions;
        this.notifications = notifications;
        this.fraudChecks = fraudChecks;
        this.audit = audit;
    }

    public void placeOrder() { /* uses half the fields */ }

    public void refundOrder() { /* uses the other half */ }
}
