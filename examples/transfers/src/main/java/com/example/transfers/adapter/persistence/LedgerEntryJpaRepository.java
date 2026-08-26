package com.example.transfers.adapter.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

interface LedgerEntryJpaRepository extends JpaRepository<LedgerEntryJpaEntity, Long> {}
