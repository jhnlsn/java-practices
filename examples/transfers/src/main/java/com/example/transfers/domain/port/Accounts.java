package com.example.transfers.domain.port;

import java.util.Optional;

import com.example.transfers.domain.Account;
import com.example.transfers.domain.AccountId;

/**
 * Development playbook §3.3 — driven port, owned by the domain. The adapter
 * (JPA, JDBC, whatever) depends on this interface, never the reverse. Ports
 * are the only place the testing playbook permits test doubles (§6.3).
 */
public interface Accounts {

    Optional<Account> byId(AccountId id);

    void save(Account account);
}
