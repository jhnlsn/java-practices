package com.example.antipatterns.godusecase.good;

import com.example.antipatterns.godusecase.Ports.AuditTrail;
import com.example.antipatterns.godusecase.Ports.CustomerNotifications;
import com.example.antipatterns.godusecase.Ports.Refunds;
import com.example.antipatterns.godusecase.Ports.Shipping;

/** The other business operation, with the other half of the dependencies. */
public class RefundOrderUseCase {

    private final Refunds refunds;
    private final Shipping shipping;
    private final CustomerNotifications notifications;
    private final AuditTrail audit;

    public RefundOrderUseCase(Refunds refunds, Shipping shipping,
                              CustomerNotifications notifications, AuditTrail audit) {
        this.refunds = refunds;
        this.shipping = shipping;
        this.notifications = notifications;
        this.audit = audit;
    }

    public void refundOrder() { /* the same refund logic, at home */ }
}
