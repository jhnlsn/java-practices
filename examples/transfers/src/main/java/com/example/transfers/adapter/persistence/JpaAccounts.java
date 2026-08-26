package com.example.transfers.adapter.persistence;

import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.transfers.domain.Account;
import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.port.Accounts;

/**
 * Implements the domain-owned {@link Accounts} port. Mapping happens at this
 * edge, always — no JPA type crosses it in either direction.
 */
@Component
class JpaAccounts implements Accounts {

    private final AccountJpaRepository repository;

    JpaAccounts(AccountJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<Account> byId(AccountId id) {
        return repository.findById(id.value()).map(AccountJpaEntity::toDomain);
    }

    @Override
    public void save(Account account) {
        repository.save(AccountJpaEntity.fromDomain(account));
    }
}
