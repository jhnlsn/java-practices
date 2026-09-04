# Process Notes

How this repository was built and validated. Nothing here is needed to apply
the playbooks; it is kept for the record and for anyone who wants to know why
the repo is shaped the way it is.

- [Origin](#origin)
- [Adversarial review](playbook-adversarial-review.md) — the prosecution and defense of every major decision, whose summary judgment produced the playbooks' amendments
- [Design decisions](#design-decisions)
- [Migration roadmap (completed)](#migration-roadmap-completed)
- [Where the adversarial review's amendments landed](#where-the-adversarial-reviews-amendments-landed)
- [Acceptance dry run](acceptance-dry-run.md)

## Origin

The playbooks were first drafted as standalone markdown documents, with their
code examples embedded as snippets. The purpose of this repository was to
migrate those snippets into real Java files so the examples could never
silently rot: if a template stops compiling or a test stops passing, the build
fails. The guiding principle throughout was that **the playbooks stay canonical
for rules and rationale, and the code becomes canonical for examples.**

Two snippets turned out to have real bugs once they compiled and ran: the
`Money` record compared unequal for equal amounts at different scales and
accepted pseudo-currencies with a negative fraction-digit count, and the
`TransferPolicy` test compared a factory's output to the same factory's
output. Both fixes are now part of the canonical files and the playbook text
that links to them.

## Design decisions

- **One reference project, not many micro-examples.** The transfers example
  already threads through both playbooks; a single coherent feature shows how
  the pieces meet, which fragments cannot.
- **Anti-patterns are real code.** A bad example that doesn't compile teaches
  nothing about *why* it's tempting; the gallery keeps them compiling and lets
  the enforcement rules condemn them.
- **The adversarial review is preserved as a process record.** Its amendments
  were applied to the playbooks, which now state each rule with its scope and
  rationale inline; the argument itself is kept here for anyone revisiting a
  decision.
- **Gradle root at `examples/`**, so later example modules join `transfers`
  and `antipatterns` as siblings.
- **Bad test specimens live in the main source set** of the antipatterns
  module, so they compile on every build but no runner ever executes them, and
  the ArchUnit gate stays scoped to `transfers`.

## Migration roadmap (completed)

Each phase left the repo in a useful state. The list is preserved as a record
of what exists and why; there is no open roadmap.

### Phase 0 — Repository scaffolding
- [x] `.gitignore`, license, and an initial commit of the playbooks as-is
  (preserving the originals before restructuring).
- [x] Moved the three documents into `docs/`.
- [x] Added `AGENTS.md` / `CLAUDE.md` so agents know the reading order and the
  rules of engagement.

### Phase 1 — Build foundation
- [x] Created the `examples/transfers` Gradle project: Kotlin DSL, version
  catalog, Java 21 toolchain, Spring Boot 3.x.
- [x] Test dependencies per testing playbook §3.1 (Testcontainers + Postgres,
  AssertJ, Awaitility, WireMock, no H2).
- [x] Split `test` vs `integrationTest` tasks (`*IT` naming) per testing
  playbook §7.
- [x] GitHub Actions workflow: compile → unit/slice → integration, mirroring
  the PR gate order.

### Phase 2 — Test support infrastructure (testing playbook §3.2–3.3)
- [x] `@IntegrationTest` meta-annotation and `TestcontainersConfiguration`
  with `@ServiceConnection`, verified by a boot smoke test
  (`TransfersApplicationIT`) against a real Postgres container.
- [x] Test data builders (`AccountBuilder`, `Monies`) in `support/`, landed
  with Phase 3 since builders construct the domain types.

### Phase 3 — Domain core (dev playbook §3.1–3.3)
- [x] `Money`: record with validating constructor, plus canonical scale so
  equal amounts compare equal.
- [x] `Account` aggregate, `TransferPolicy`, sealed `TransferDecision`. The
  aggregate guards its invariant with exceptions; the policy returns decisions
  as values, the results-for-decisions / exceptions-for-aborts split from the
  adversarial review §5.
- [x] Ports `Accounts`, `FxRates`, `LedgerEvents` as domain-owned interfaces
  in domain vocabulary, plus `CurrencyPair`, `ExchangeRate`,
  `TransferCompleted`.
- [x] Domain unit tests, no Spring (testing playbook §4.1): 18 tests,
  sub-second.

### Phase 4 — Application and adapters (dev playbook §3.4–3.6)
- [x] `TransferUseCase`: orchestration only, injected `Clock`, no business
  `if`s; sealed `TransferResult`, `AccountNotFound` as the abort path.
- [x] Adapters: `TransferController` with adapter-private wire DTOs and an
  error handler (422/404), `JpaAccounts` with separate JPA entities and edge
  mapping, Flyway-owned schema, `HttpFxRates` over `RestClient`,
  `SpringLedgerEvents` plus the async `LedgerEntryRecorder`.
- [x] Web slice test (§4.2), full integration test through HTTP with real
  Postgres (§4.3), WireMock test for the FX boundary (§4.4), Awaitility async
  ledger assertion (§4.5). At the time: 24 unit/slice + 6 integration tests.

### Phase 5 — Enforcement (dev playbook §7)
- [x] ArchUnit suite: framework-free domain, adapter isolation, no field
  injection, and a layered rule making "dependencies point inward"
  enforceable. Runs in the fast unit suite. ArchUnit pinned to the 1.4.x line
  that matches Boot 3.5's JUnit Platform.
- [x] Applied the adversarial review's Mockito amendment: no dependency
  exclusion; `MockUsageTest` scopes `@MockitoBean`/`@Mock` to domain ports and
  use cases.
- [x] PIT on `domain.*` only, as a non-blocking CI job that uploads the report
  as a trend artifact. First run: 98% mutation score, 100% test strength,
  about 4s. Surviving mutants drove real test fixes (factory-vs-factory
  comparison in `TransferPolicyTest`, zero-decimal currencies, cross-currency
  guards).

### Phase 6 — Anti-pattern gallery
- [x] Turned the "What Bad Looks Like" tables into compiling bad/good pairs in
  `examples/antipatterns/`: ten scenarios covering all twenty table rows, with
  the row → exhibit map in the gallery README. Highlight:
  `testing/mockedowned`, where the mock-based test passes against a service
  whose debit adds instead of subtracts.

### Phase 7 — Fold code back into the docs
- [x] Every template snippet in both playbooks synced to its canonical file
  and linked to it ("where a snippet and the code differ, the code wins").
- [x] Applied the adversarial review's summary-judgment amendments to the
  playbooks (see the trace below).
- [x] CI `docs-references` job runs `scripts/check_doc_refs.py`: every repo
  path referenced from markdown must exist. Verified to fail on a broken
  reference.

### Phase 8 — Agent enablement and validation
- [x] Finalized `AGENTS.md`: task → playbook section → canonical file mapping
  for twelve common task shapes.
- [x] Acceptance dry run passed: a fresh agent added cross-currency transfer
  support following only the playbooks. Rules landed in the right rings, all
  suites and the ArchUnit gate were green unaided, and the feature merged
  without modification. The run, its grading, and the agent's escape-valve
  findings are in [acceptance-dry-run.md](acceptance-dry-run.md).

## Where the adversarial review's amendments landed

The [review](playbook-adversarial-review.md)'s §11 summary judgment proposed
one amendment per decision. Each was applied as follows; the review itself was
left unchanged.

| Review section | Amendment | Landed in |
|---|---|---|
| §1 Never mock owned classes | Legacy characterization-test carve-out | Testing playbook §6.3 |
| §2 Testcontainers, H2 banned | Narrow H2 waiver for zero-native-SQL modules | Testing playbook §3.1 |
| §3 Hexagonal architecture | Scoping preamble; plain CRUD may skip the rings | Dev playbook §0 |
| §4 Separate JPA/domain types | Only where the domain has behavior | Dev playbook §0 |
| §5 Sealed results vs exceptions | Results for decisions, exceptions for aborts | Dev playbook §3.2 |
| §6 Exclude Mockito | Replaced by an ArchUnit rule scoping what may be mocked | Testing playbook §3.1; `MockUsageTest` |
| §7 PIT as PR gate | Reported trend, not a blocking gate | Testing playbook §7; non-blocking CI job |
| §8 Flake auto-delete | Deletion is a human decision with triage | Testing playbook §7 |
| §9 Meta-annotations/caching | No `@MockitoBean` in integration tests; mandatory data cleanup | Testing playbook §6.3 |
| §10 Directive style | Escape valve: surface disproportionate ceremony to a human | Both playbooks §0/§9 |
