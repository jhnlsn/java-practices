package com.example.antipatterns.godusecase;

/** Shared stand-in ports for this scenario; their shapes don't matter. */
public final class Ports {

    private Ports() {}

    public interface Inventory {}
    public interface Pricing {}
    public interface Payments {}
    public interface Refunds {}
    public interface Shipping {}
    public interface Taxes {}
    public interface Promotions {}
    public interface CustomerNotifications {}
    public interface FraudChecks {}
    public interface AuditTrail {}
}
