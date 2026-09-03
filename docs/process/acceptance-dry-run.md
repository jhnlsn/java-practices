# Acceptance Dry Run — 2026-08-25

The repo's acceptance test ([roadmap](README.md#phase-8--agent-enablement-and-validation)
Phase 8): can an agent deliver a correctly-structured feature using **only**
the playbooks and templates, without human correction?

## Setup

- **Agent:** Claude Sonnet, fresh context, isolated git worktree cut from the
  commit that closed roadmap Phase 7. It saw only the committed docs and
  code — no conversation history, no structural hints.
- **Task:** six business-level requirements for cross-currency transfer
  support (amounts stated in source currency; conversion via the existing
  `FxRates` port; provider outage aborts with nothing persisted → 503;
  same-currency transfers must not call the provider; ledger keeps recording
  the source-currency amount), plus "read AGENTS.md and follow the playbooks."
- **Grading:** independent re-run of all suites in the worktree
  (`--rerun-tasks`), diff review against both §5 checklists and §6 tables,
  then merge into `main` and re-verify.

## Result: PASS

- Rules landed in the right rings unaided: `CURRENCY_MISMATCH` as a new
  policy decision (checked first — with a comment and a unit test explaining
  why the ordering is load-bearing), conversion computed before any mutation
  so `FxUnavailable` aborts cleanly under `@Transactional`, adapter maps the
  abort to 503, wire concerns stayed in the adapter.
- 37 unit + 10 integration tests green, including all ArchUnit rules and
  `MockUsageTest`; PIT 98% / test strength 100%. No §6 reject-on-sight rows
  matched. The feature merged without modification:
  see the "Add cross-currency transfer support" commit.

## Escape-valve findings (reported by the agent; pending human decision)

These are the friction points the agent surfaced under both playbooks' §9
escape-valve directive. Each is a candidate doc clarification, deliberately
**not** yet applied — playbook rules change only on explicit human direction.

1. **Decisions-vs-aborts doesn't cover "malformed relative to loaded state."**
   A currency-mismatched request needs the loaded account to detect (so it
   can't be wire validation) but isn't an alternate business outcome either.
   The agent modeled it as a third `RejectionReason` (422); an exception
   mapped to 422 would have been equally defensible. Dev playbook §3.2 has no
   tiebreaker.
2. **"No business `if`s in the use case" (dev §3.4) doesn't define its own
   boundary.** The should-I-call-FX currency-equality check is a
   domain-data-driven branch that can't live in the domain (ports aren't
   callable there). The agent kept it in the use case with a justifying
   comment and flagged it rather than building a ceremony type — the intended
   escape-valve behavior, but the rule's wording invites a false reject.
3. **WireMock zero-call verification vs. "never assert interactions"
   (testing §5).** "Must not call the provider" has no other observable to
   assert. Verifying request *counts* against a doubled unowned boundary is
   arguably fine; the playbook only blesses stubbing responses.
4. **No stated budget for context growth** when a §4.3 flow test also needs a
   §4.4 boundary double: `@DynamicPropertySource` makes each such class a new
   Spring context, and the playbooks warn against multiplication without
   pricing this sanctioned collision.
5. **Roadmap-tracking rules assume the worker commits.** AGENTS.md ties
   checkbox updates to commits; an agent instructed not to commit couldn't
   comply. (Resolved for this run by the orchestrator. The roadmap has since
   closed and the checkbox rule was removed from AGENTS.md.)
