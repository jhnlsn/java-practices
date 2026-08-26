package com.example.antipatterns.entityasmodel.bad;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * REJECT ON SIGHT — dev playbook §6:
 * <ul>
 *   <li>"JPA entity used as domain model"</li>
 *   <li>"Domain importing @Component, @Entity, @JsonProperty"</li>
 *   <li>"Setters on domain objects"</li>
 * </ul>
 *
 * One class is simultaneously the database row, the wire format, and the
 * business object. Renaming a column breaks the public API; serializing it
 * can trigger lazy-loading; and because JPA demands mutability, every setter
 * is also part of the "domain model". There is no state this class can
 * refuse to be in.
 *
 * Required fix: {@code entityasmodel.good} — one type per concern, mapped at
 * the adapter edge (the full runnable pattern: transfers/adapter/persistence).
 */
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("total") // wire concern, persistence concern, and domain in one type
    private BigDecimal totalCents;

    private String status; // stringly-typed state machine

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public BigDecimal getTotalCents() { return totalCents; }
    public void setTotalCents(BigDecimal totalCents) { this.totalCents = totalCents; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
