package com.example.transfers.adapter.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

interface AccountJpaRepository extends JpaRepository<AccountJpaEntity, String> {}
