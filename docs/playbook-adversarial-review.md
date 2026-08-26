# Adversarial Review: Design Decisions in the Testing & Development Playbooks

> **Purpose:** An honest prosecution and defense of every major decision in `java-testing-playbook.md` and `java-development-playbook.md`. Each section argues both directions with concrete examples, then states the boundary conditions where the decision genuinely loses. Use this to decide *whether* to adopt each rule for a given project — the playbooks assume adoption; this document interrogates it.

---

## 1. "Never mock owned classes" + integration-heavy trophy

### The case for

Mock-based tests routinely pass while production is broken, because they restate the implementation:

```java
// This test cannot fail unless the implementation changes — it verifies nothing about behavior
@Test
void transfersMoney() {
    when(accounts.byId(A)).thenReturn(Optional.of(accountA));
    when(accounts.byId(B)).thenReturn(Optional.of(accountB));

    useCase.transfer(A, B, Money.of(40));

    verify(accounts).save(accountA);
    verify(accounts).save(accountB);   // saved... with what balances? Test doesn't know.
}
```

The classic failure: the debit line reads `balance.add(amount)` instead of `subtract`. The mock test passes. The integration test from the playbook (`assertThat(accounts.findById("A")...balance()).isEqualTo(Money.of(60))`) fails immediately. Mocks also calcify refactors: change `save(a); save(b)` to `saveAll(List.of(a,b))` — behavior identical, mock test breaks.

### The case against

Integration tests have brutal failure-diagnosis costs. When the mock test above fails, the stack trace points at a line. When the integration test fails, the cause could be the policy, the mapping layer, a flyway migration, transaction propagation, or the container networking. A team of juniors debugging `expected 60 but was 100` through five layers at 2 a.m. before a release will not thank you.

There's also a locality argument: a use case with 6 branches needs 6 integration tests under this strategy — each spinning HTTP + DB — where 6 mock tests would run in 50ms total. The playbook's answer ("extract branches into a pure policy") works, but *only if the refactor happens*. On a legacy codebase mid-migration, the rule bans the cheap test without the structure that makes the expensive one cheap. That gap is where teams quietly stop writing tests at all.

### Where the against genuinely wins

- Legacy code you can't restructure yet: a characterization mock test is better than no test. The playbook should be read as target state, not day-one law.
- Orchestration-only logic with pathological setup cost (e.g., a saga step requiring 4 upstream states): one mock test of the sequencing, plus one end-to-end happy path, is a defensible trade.

---

## 2. Testcontainers everywhere; H2 banned

### The case for

H2's compatibility modes are a lie at the margins, and the margins are where bugs live. Real examples that pass on H2 and fail on Postgres: `ON CONFLICT` upserts, `jsonb` operators, case-sensitivity of unquoted identifiers, `FOR UPDATE SKIP LOCKED`, differences in transaction isolation behavior. A queue implementation using `SKIP LOCKED` is *untestable* on H2 — teams then either don't test it or write a fake that hides the exact concurrency behavior the test exists to check. With `@ServiceConnection` + container reuse, the setup cost the anti-Testcontainers camp remembers from 2019 mostly no longer exists.

### The case against

Testcontainers taxes every environment forever:

- **Docker becomes a hard dependency** for running the test suite. Corporate laptops without Docker rights, CI runners needing privileged mode or Testcontainers Cloud spend, Apple Silicon image mismatches — each is a recurring support ticket.
- **Speed floor:** even reused, a Postgres container adds seconds to the first test and megabytes of RAM per parallel fork. A 2,000-test suite that ran in 90s on H2 can become 8 minutes. The playbook's "<10 min CI" gate absorbs this, but that's 10 minutes on *every PR* — a real drag coefficient on iteration.
- **The dialect argument cuts both ways:** if your persistence layer is plain JPA with no native queries, H2-vs-Postgres divergence risk is genuinely low, and you're paying the container tax to insure against a risk you've structurally excluded.

### Where the against genuinely wins

Pure-JPA CRUD services with zero native SQL, no locking semantics, and constrained CI budgets. Even then, prefer *one* Testcontainers smoke test of the schema + migrations over zero.

---

## 3. Hexagonal architecture with a framework-free domain

### The case for

The decision rule ("decide / sequence / translate") gives every line of code an unambiguous home, which is exactly what makes the testing portfolio (§2 of the testing playbook) cheap: rules are unit-tested with `new`, orchestration is integration-tested once, adapters are slice-tested. The `TransferPolicy` example needs zero mocks, zero context, runs in microseconds, and survives any persistence rewrite. And the structure is what makes rule #1 ("never mock owned classes") *free* rather than painful.

### The case against

For a large class of real services, hexagonal is ceremony without payoff. Consider a genuinely simple endpoint:

```java
// What the playbook requires:
CustomerController → CustomerRequest → CustomerUseCase → Customer (domain)
   → Customers (port) → JpaCustomers (adapter) → CustomerJpaEntity → mapper both ways

// What the feature is:
@PostMapping("/customers")
Customer create(@Valid @RequestBody Customer c) { return repo.save(c); }
```

That's ~7 types and 2 mapping layers to persist a row. Multiply across 40 CRUD entities and you've written thousands of lines of mapping code that can itself contain bugs (field forgotten in `toDomain()` — a bug category that *didn't exist before the architecture*). Spring Data's entire value proposition — deriving the boring 80% — is deliberately discarded.

The indirection also has a comprehension cost: "where does the price actually get set?" now traverses interface → implementation → mapper, and IDE "go to implementation" becomes a way of life. Junior onboarding measurably slows.

### Where the against genuinely wins

- CRUD-dominant services with thin rules: use the structure only for the 2–3 features with real domain logic; let plain `@Entity`-as-model stand elsewhere. (This is a legitimate reading of the playbook's Phase 2 "per feature" adoption — but the document should say so louder.)
- Prototypes and internal tools with a lifespan measured in months.

---

## 4. Separate JPA entities from domain models

### The case for

JPA requirements (no-arg constructor, mutability, proxies, lazy loading) directly contradict domain requirements (validating constructors, immutability, no surprises). One concrete horror: a domain method iterating `account.transactions()` inside `equals()` triggers a lazy-load N+1 in production because the "domain object" was secretly a Hibernate proxy. Splitting the types makes the domain honest and lets records + sealed types work.

### The case against

The mapping layer is a bug factory and a change amplifier. Adding one field now touches: domain record, JPA entity, two mapper directions, the wire DTO, and its mapper — five edits, three of which the compiler can't fully verify (a forgotten mapper line compiles fine and silently drops data). Ironically, the playbooks now need tests *for the mappers* — tests that exist only because of the architecture. Modern JPA with Hibernate 6 handles immutable-ish patterns (`@Immutable`, constructor binding for projections) well enough that the contradiction is weaker than the 2015-era arguments assume.

### Where the against genuinely wins

Aggregates that are pure data with validation but no behavior. A mapping layer between two structurally identical types is pure waste — use the JPA entity as the model and spend the effort where behavior lives.

---

## 5. Sealed result types instead of business exceptions

### The case for

`switch` over a sealed `TransferDecision` makes a new rejection reason a *compile error* at every call site — an entire class of "unhandled case" bugs and their tests evaporates. Exceptions-as-control-flow hide outcomes from the type system, cost stack-trace construction on hot paths, and produce test code shaped like `assertThrows`, which encourages asserting on exception *types* rather than behavior.

### The case against

There's a Spring-shaped trap the playbook doesn't mention: **`@Transactional` rolls back on exceptions, not on result values.** This use case has a latent bug:

```java
@Transactional
public TransferResult transfer(...) {
    source.debit(amount);
    accounts.save(source);
    var enrichment = enrich(target);          // returns Result.failure(...) — no exception!
    if (enrichment.failed()) return TransferResult.rejected(...);  // COMMITS the debit!
    ...
}
```

With exceptions, rollback is automatic; with results, every early return inside a transaction is a correctness decision the developer must remember. Also: results are viral (every caller must unwrap), Java lacks ergonomic monadic composition (no `?` operator), and interop with Spring's exception-driven machinery (`@ControllerAdvice`, retry, circuit breakers) requires translating results *back* into exceptions at the edges — ceremony in both directions.

### Where the against genuinely wins

- Anything that must abort a transaction: exceptions are the mechanically safer tool inside `@Transactional` boundaries.
- Deeply nested call chains where result-unwrapping noise exceeds the domain logic.
- Verdict worth adopting: sealed results for *decisions* (pure domain), exceptions for *failures* (I/O, invariant violations, abort semantics). The playbook gestures at this but under-specifies it.

---

## 6. Excluding Mockito by default

### The case for

Defaults are destiny. With Mockito on the classpath, `@Mock` is the path of least resistance and every IDE template suggests it; without it, the friction nudges toward the structure the playbooks want. It's the "make the right thing the easy thing" principle applied negatively.

### The case against

It's theater that punishes legitimate use. The playbook itself permits mocking ports (§6.3) — so the dependency comes back anyway, and now every project carries a confusing exclude-then-re-add incantation that breaks when `spring-boot-starter-test` reorganizes. Worse, it signals distrust: teams route around rules they find performative (hand-rolled anonymous-class fakes are just mocks with worse diagnostics). Governance by dependency graph is brittle; governance by ArchUnit rule (`no @MockBean of classes outside ..port..`) is precise and self-documenting.

### Where the against genuinely wins

Almost everywhere, honestly. The better version of this decision is: keep Mockito, add an ArchUnit/Checkstyle rule that scopes what may be mocked. The exclusion is defensible only as a temporary shock-therapy move on a mock-addicted codebase.

---

## 7. Mutation testing gate (PIT ≥ 75% on critical modules)

### The case for

Line coverage is trivially gamed — execute code, assert nothing, 100%. Mutation score can't be: if `subtract` mutated to `add` kills no test, you *provably* have a test gap on money math. Scoping PIT to domain modules keeps runtime sane because pure-logic packages are exactly where PIT is fast (no containers) and where mutants matter most.

### The case against

- **Cost curve:** PIT runtime is roughly (mutants × affected tests). A domain module that grows past a few hundred classes can push the gate from 2 minutes to 30, and now the *fast* suite has a slow tail on every PR.
- **Equivalent mutants** (mutations that don't change behavior) produce unfixable score loss; teams then either lower the threshold — normalizing gate erosion — or write bizarre tests to kill semantic no-ops.
- **Gates get gamed too:** a threshold invites assertion-stuffing to kill mutants, which produces brittle over-specified tests — the very disease the playbook fights elsewhere.

### Where the against genuinely wins

Run PIT scheduled (nightly, or on changed-files only via `pitest-git` incremental analysis) rather than as a blocking PR gate. The score trend is the signal; the per-PR gate is the cost.

---

## 8. Auto-quarantine flaky tests; delete after 14 days

### The case for

One flaky test destroys the suite's authority: once "just re-run it" is normal, every red build is ambiguous and real failures ship. Quarantine keeps the signal clean; the deletion deadline forces a decision instead of a graveyard of `@Disabled` rot (which the playbook separately bans).

### The case against

**Flakiness is frequently a production bug wearing a test costume.** A test that intermittently fails on `awaitUntil(outbox.isEmpty())` may be detecting a real race in the outbox publisher. Auto-quarantine institutionalizes ignoring it; auto-*deletion* destroys the only evidence. The 14-day timer also misreads incentives — under deadline pressure, deletion is the *cheapest* outcome, so the policy quietly pays teams to let coverage evaporate.

### Where the against genuinely wins

Amend the policy: quarantine requires a ticket *with an owner*, deletion requires a human decision recording *why* (test defect vs. accepted risk), and any flake in concurrency-adjacent code gets triaged as a potential production bug first. Automation for detection, humans for destruction.

---

## 9. Meta-annotations + aggressive context caching

### The case for

Spring context startup is the dominant cost in integration suites, and the cache keys on *exact* configuration. One team, one `@IntegrationTest` annotation → one context for hundreds of tests → suite time scales with tests, not contexts. It also centralizes change: bumping the Postgres image version is a one-line edit.

### The case against

Shared contexts create *shared state*, and the playbook underweights the consequence: any test that pollutes the context (a `@MockitoBean` — which forks a new context silently! — a mutated singleton, leftover DB rows, a dirtied cache) poisons every subsequent test in the same JVM. Debugging inter-test contamination is among the worst diagnostic experiences in Spring, and the single-context strategy maximizes exposure. `@DirtiesContext`, the escape hatch, silently detonates the entire caching strategy — one annotation can double suite time and nobody notices why.

### Where the against genuinely wins

It doesn't, really — but it demands two companion rules the playbook lacks: (1) `@MockitoBean` is banned inside `@IntegrationTest` classes (it defeats the cache *and* violates §6.3 anyway); (2) every integration test cleans its data (transaction rollback or truncate-before), enforced by a base class.

---

## 10. Directive style, written for a smaller AI model

### The case for

Interpretive prose degrades badly in less capable models: "prefer real dependencies where sensible" becomes whatever the model's priors say. Directives + tables + copy-me templates constrain the output space, make violations detectable ("which section permits this?"), and turn review into diffing against a checklist. The self-review loops (§9 in both) are cheap and demonstrably reduce slop.

### The case against

Directive documents remove exactly the thing that makes rules safe: *judgment about scope*. A smaller model told "never mock owned classes" will dutifully build a WireMock-and-container test rig for a log formatter. Rules calcify — the document says "H2 banned" forever, even for the pure-JPA case in §2 above where it's defensible. And rule-lists invite letter-over-spirit compliance: the model satisfies the checklist while missing that the test asserts nothing meaningful (checklists can verify structure, not insight). Worst case, the playbooks become a cargo cult with excellent documentation.

### Where the against genuinely wins

Both documents should carry an explicit escape valve: "If following a rule produces obviously disproportionate ceremony for the code at hand, stop and surface the conflict to a human rather than complying." That single directive converts the worst failure mode (silent over-compliance) into the best one (a flagged question).

---

## 11. Summary judgment

| Decision | Verdict | Strongest amendment |
|---|---|---|
| Never mock owned classes | Keep | Explicit legacy-code carve-out (characterization tests) |
| Testcontainers, H2 banned | Keep | Allow H2 waiver for zero-native-SQL modules, one schema smoke test minimum |
| Hexagonal, framework-free domain | Keep *for logic-bearing features* | Say loudly: plain CRUD may skip the rings |
| Separate JPA/domain types | Situational | Only where domain has behavior; identical-shape mapping is waste |
| Sealed results over exceptions | Keep with caveat | Results for decisions, exceptions for aborts/rollback |
| Exclude Mockito | Replace | ArchUnit rule scoping what may be mocked |
| PIT as PR gate | Weaken | Nightly/incremental trend, not blocking gate |
| Flake auto-delete | Weaken | Auto-quarantine yes; deletion requires human decision + triage |
| Meta-annotations/caching | Keep | Ban `@MockitoBean` in integration tests; mandatory data cleanup |
| Directive style for AI | Keep | Add the "surface disproportion to a human" escape valve |

The pattern across every section: the playbooks' decisions are right *as defaults for logic-bearing services*, and most of the honest counterarguments are really scope arguments — cases where the code doesn't have enough domain weight to pay for the structure. The highest-value revision is not changing any rule but adding a scoping preamble: **which kind of code each playbook governs, and a sanctioned cheap path for the code it doesn't.**
