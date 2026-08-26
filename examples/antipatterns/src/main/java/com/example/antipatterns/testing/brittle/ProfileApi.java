package com.example.antipatterns.testing.brittle;

/** Stand-in for any endpoint or client returning a JSON payload. */
public class ProfileApi {

    public String fetchProfile(long id) {
        return """
                {"id":%d,"name":"Ada","email":"ada@example.com","lastSeen":"2026-08-25T12:00:00Z"}
                """.formatted(id).strip();
    }
}
