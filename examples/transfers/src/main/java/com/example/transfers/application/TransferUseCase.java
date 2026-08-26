package com.example.transfers.application;

import java.time.Clock;
import java.util.Currency;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.CurrencyPair;
import com.example.transfers.domain.Money;
import com.example.transfers.domain.TransferCompleted;
import com.example.transfers.domain.TransferDecision;
import com.example.transfers.domain.TransferPolicy;
import com.example.transfers.domain.port.Accounts;
import com.example.transfers.domain.port.FxRates;
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
    private final FxRates fxRates;
    private final LedgerEvents events;
    private final Clock clock; // time is a dependency (dev playbook §3.6)

    public TransferUseCase(Accounts accounts, TransferPolicy policy, FxRates fxRates,
                           LedgerEvents events, Clock clock) {
        this.accounts = accounts;
        this.policy = policy;
        this.fxRates = fxRates;
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
                // Determined before any mutation: if the rate provider is down
                // (FxRates' declared failure mode, FxUnavailable) this throws and
                // @Transactional rolls back — nothing below has run yet.
                var creditAmount = creditAmountFor(amount, target.balance().currency());
                source.debit(amount);
                target.credit(creditAmount);
                accounts.save(source);
                accounts.save(target);
                // The ledger records what left the source account, in its
                // currency — not the converted amount the target received.
                events.publish(new TransferCompleted(from, to, amount, clock.instant()));
                yield TransferResult.completed();
            }
        };
    }

    /**
     * Same-currency transfers pass the amount through untouched and never
     * reach the FX port — which is also what keeps this a sequencing step
     * rather than a business decision: it picks which port call, if any, is
     * needed to state a value already implied by the two accounts'
     * currencies, not whether the transfer is allowed.
     */
    private Money creditAmountFor(Money debited, Currency targetCurrency) {
        if (debited.currency().equals(targetCurrency)) {
            return debited;
        }
        var rate = fxRates.rateFor(new CurrencyPair(debited.currency(), targetCurrency));
        return rate.convert(debited);
    }
}
