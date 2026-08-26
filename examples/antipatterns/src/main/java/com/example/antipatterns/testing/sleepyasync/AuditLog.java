package com.example.antipatterns.testing.sleepyasync;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/** Stand-in for any component that completes work asynchronously. */
public class AuditLog {

    private final List<String> pending = new CopyOnWriteArrayList<>();

    public void submit(String event) {
        pending.add(event);
        Thread.ofVirtual().start(() -> pending.remove(event)); // drains "eventually"
    }

    public List<String> pendingEvents() {
        return List.copyOf(pending);
    }
}
