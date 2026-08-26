package com.example.transfers.application;

import java.time.Clock;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.Money;
import com.example.transfers.domain.TransferCompleted;
import com.example.transfers.domain.TransferDecision;
import com.example.transfers.domain.TransferPolicy;
import com.example.transfers.domain.port.Accounts;
import com.example.transfers.domain.port.LedgerEvents;

/**
 * Development playbook §3.4 — the application's public API for transfers.
 * Orchestration only: load, decide, mutate, save, publish. It contains no
 * business {@code if}s — the decision belongs to {@link TransferPolicy}.
 * Spring may touch the annotations on this class, nothing deeper.
 */
@Service
public class TransferUseCase {

    private final Accounts accounts;
    private final TransferPolicy policy;
    private final LedgerEvents events;
    private final Clock clock; // time is a dependency (dev playbook §3.6)

    public TransferUseCase(Accounts accounts, TransferPolicy policy,
                           LedgerEvents events, Clock clock) {
        this.accounts = accounts;
        this.policy = policy;
        this.events = events;
        this.clock = clock;
    }

    @Transactional
    public TransferResult transfer(AccountId from, AccountId to, Money amount) {
        var source = accounts.byId(from).orElseThrow(() -> new AccountNotFound(from));
        var decision = policy.evaluate(source, amount);
        return switch (decision) {
            case TransferDecision.Rejected(var reason) -> TransferResult.rejected(reason);
            case TransferDecision.Approved() -> {
                var target = accounts.byId(to).orElseThrow(() -> new AccountNotFound(to));
                source.debit(amount);
                target.credit(amount);
                accounts.save(source);
                accounts.save(target);
                events.publish(new TransferCompleted(from, to, amount, clock.instant()));
                yield TransferResult.completed();
            }
        };
    }
}
