package com.example.antipatterns.fatservice.bad;

/**
 * REJECT ON SIGHT — dev playbook §6: "Anemic domain + fat service" and
 * "Setters on domain objects". This is a data bag: every rule about points
 * lives somewhere else, any code can put it into an invalid state (negative
 * points, null tier), and tests must know the right mutation order.
 */
public class Customer {

    private String id;
    private String tier;
    private int points;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTier() { return tier; }
    public void setTier(String tier) { this.tier = tier; }
    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
}
