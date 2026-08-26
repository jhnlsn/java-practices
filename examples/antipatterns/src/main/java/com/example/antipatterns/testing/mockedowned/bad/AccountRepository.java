package com.example.antipatterns.testing.mockedowned.bad;

import java.util.Optional;

public interface AccountRepository {

    Optional<Account> byId(String id);

    void save(Account account);
}
