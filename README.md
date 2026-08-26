# Java Practices

Engineering practices for writing Java code that is easy to test — and the working code to prove it.

This repo pairs two things that usually live apart:

1. **Playbooks** — directive documents that tell an engineer *or an AI agent* exactly how to structure and test Spring Boot 3.x / Java 21+ code, without room for interpretation.
2. **A reference implementation** — a real, compiling, tested Gradle project where every rule and template in the playbooks exists as executable code, verified by CI.

The playbooks were originally drafted as standalone markdown (in Claude Desktop). The purpose of this repo is to migrate their embedded code snippets into real Java files so the examples can never silently rot: if a template stops compiling or a test stops passing, the build fails.

## Audience

**Humans** — read the playbooks to learn the practices, then read the reference implementation to see them applied to a complete feature (a money-transfer flow), including the test suite and the enforcement rules.

**Agents** — both playbooks end with an "Instructions for an AI Assistant" section (§9 in each). An agent working in a codebase governed by these documents should classify the task using the decision rules, copy the canonical templates from the reference implementation (not reinvent them), and self-review against the "What Good/Bad Looks Like" checklists before presenting code.

## The documents

| Document | Role |
|---|---|
| [docs/java-development-playbook.md](docs/java-development-playbook.md) | How to *write* code: hexagonal architecture with a framework-free domain core, ports at every boundary you don't own, use cases as the application API, sealed result types, injected clocks. |
| [docs/java-testing-playbook.md](docs/java-testing-playbook.md) | How to *test* it: test portfolio proportions, Testcontainers over H2, never mock owned classes, meta-annotations for context caching, builders, quality gates (mutation testing, flake policy). |
| [docs/playbook-adversarial-review.md](docs/playbook-adversarial-review.md) | Prosecution and defense of every major decision above, ending in a summary-judgment table of amendments. This is the "when *not* to apply the rules" document. |

The two playbooks are companions: every rule in the development playbook exists to make a rule in the testing playbook cheap to follow. The adversarial review's verdict is that the rules are right *as defaults for logic-bearing services*, and its amendments (scoping preamble, legacy carve-outs, escape valve for disproportionate ceremony) still need to be folded back into the playbooks — that is tracked in the roadmap below.

## Target repository layout

```
java-practices/
├── README.md                        ← you are here
├── AGENTS.md                        ← agent entry point (task → playbook section → example file)
├── docs/
│   ├── java-development-playbook.md
│   ├── java-testing-playbook.md
│   └── playbook-adversarial-review.md
├── examples/transfers/              ← the reference implementation (Gradle, Java 21, Boot 3.x)
│   ├── build.gradle.kts             ← split test/integrationTest tasks, PIT, version catalog
│   └── src/
│       ├── main/java/com/example/transfers/
│       │   ├── domain/              ← Money, Account, TransferPolicy, TransferDecision, port/
│       │   ├── application/         ← TransferUseCase
│       │   └── adapter/             ← web/, persistence/, fx/
│       └── test/java/com/example/transfers/
│           ├── support/             ← @IntegrationTest, TestcontainersConfiguration, builders
│           ├── architecture/        ← ArchUnit rules (the enforcement from dev playbook §7)
│           └── ...                  ← one exemplary test of every type (testing playbook §4)
└── examples/antipatterns/           ← the "reject on sight" tables as annotated bad/good pairs
```

Guiding principle for the migration: **the playbooks stay canonical for rules and rationale; the code becomes canonical for examples.** Inline snippets in the markdown get replaced by (or linked to) real files, and CI keeps them honest.

## Migration roadmap

Each phase leaves the repo in a useful state; check items off as they land.

### Phase 0 — Repository scaffolding
- [x] Add `.gitignore` (Gradle, IDE files, `.DS_Store`), license, and make the initial commit of the playbooks as-is (preserve the originals before restructuring).
- [x] Move the three documents into `docs/`.
- [x] Add `AGENTS.md` / `CLAUDE.md` so agents landing in this repo know the reading order and the rules of engagement.

### Phase 1 — Build foundation
- [x] Create the `examples/transfers` Gradle project: Kotlin DSL, version catalog, Java 21 toolchain, Spring Boot 3.x. (Gradle root lives at `examples/` so later example modules join as siblings.)
- [x] Add test dependencies per testing playbook §3.1 (Testcontainers + Postgres, AssertJ, Awaitility, WireMock — no H2).
- [x] Split `test` vs `integrationTest` tasks (`*IT` naming) per testing playbook §7.
- [x] GitHub Actions workflow: compile → unit/slice → integration, mirroring the PR gate order.

### Phase 2 — Test support infrastructure (testing playbook §3.2–3.3)
- [x] `@IntegrationTest` meta-annotation and `TestcontainersConfiguration` with `@ServiceConnection`, verified by a boot smoke test (`TransfersApplicationIT`) against a real Postgres container.
- [x] Test data builders (`AccountBuilder`, plus `Monies` fixtures) in `support/` — landed with Phase 3, since builders construct the domain types.

### Phase 3 — Domain core (dev playbook §3.1–3.3)
- [x] `Money` — record with validating constructor (template §3.1), plus canonical scale so equal amounts compare equal.
- [x] `Account` aggregate, `TransferPolicy`, sealed `TransferDecision` (template §3.2). The aggregate guards its invariant with exceptions; the policy returns decisions as values — the results-for-decisions / exceptions-for-violations split from the adversarial review §5.
- [x] Ports: `Accounts`, `FxRates`, `LedgerEvents` — domain-owned interfaces, domain vocabulary (template §3.3), plus `CurrencyPair`/`ExchangeRate`/`TransferCompleted` domain types.
- [x] Domain unit tests, no Spring (testing playbook §4.1) — 18 tests, sub-second. Demonstrates the dev playbook workflow §4 steps 1–2: domain first, ports second; the use case (step 3) opens Phase 4.

### Phase 4 — Application and adapters (dev playbook §3.4–3.6)
- [x] `TransferUseCase` — orchestration only, injected `Clock`, no business `if`s; sealed `TransferResult`, `AccountNotFound` as the abort path.
- [x] Adapters: `TransferController` + adapter-private wire DTOs and error handler (422/404), `JpaAccounts` + separate JPA entities with edge mapping, Flyway-owned schema, `HttpFxRates` over `RestClient`, `SpringLedgerEvents` + async `LedgerEntryRecorder` for the `LedgerEvents` port.
- [x] Web slice test (§4.2, Mockito re-added explicitly for the §6.3 port-boundary case), full integration test through HTTP with real Postgres (§4.3), WireMock test for the FX boundary (§4.4), Awaitility async ledger assertion (§4.5). Suites: 24 unit/slice + 6 integration, all green.

### Phase 5 — Enforcement (dev playbook §7)
- [x] ArchUnit suite: framework-free domain, adapter isolation, no field injection, plus a layered rule making "dependencies point inward" (core principle #2) enforceable. Runs in the fast unit suite. (ArchUnit pinned to 1.4.x — the line matching Boot 3.5's JUnit Platform.)
- [x] Applied the adversarial review's amendment: Mockito exclusion removed; `MockUsageTest` scopes `@MockitoBean`/`@Mock` to domain ports and use cases.
- [x] PIT on `domain.*` only — non-blocking CI job uploading the report as a trend artifact. Current: 98% mutation score, 100% test strength, ~4s runtime. Surviving mutants drove real test fixes (factory-vs-factory comparison in `TransferPolicyTest`, zero-decimal currencies, cross-currency guards).

### Phase 6 — Anti-pattern gallery
- [x] Turned the "What Bad Looks Like" tables into compiling bad/good pairs in `examples/antipatterns/` — ten scenarios covering all twenty table rows (see [its README](examples/antipatterns/README.md) for the row → exhibit map). Bad *test* specimens live in the main source set so they compile on every build but never execute; the ArchUnit gate stays scoped to `transfers`. Highlight: `testing/mockedowned`, where the mock-based test passes against a service whose debit adds instead of subtracts.

### Phase 7 — Fold code back into the docs
- [ ] Replace inline snippets in both playbooks with links to the real files (or CI-verified excerpts), so docs and code cannot drift.
- [ ] Apply the adversarial review's summary-judgment amendments to the playbooks: scoping preamble (which code each playbook governs, and the sanctioned cheap path for plain CRUD), legacy-code carve-out, results-for-decisions/exceptions-for-aborts clarification, human-decision flake deletion, and the "surface disproportionate ceremony to a human" escape valve.
- [ ] Add a CI check that every file/symbol the docs reference actually exists.

### Phase 8 — Agent enablement and validation
- [ ] Finalize `AGENTS.md`: task classification → playbook section → template file mapping.
- [ ] Dry run: have an agent add a small feature (e.g., a transfer-limit rule) following only the playbooks and templates, and verify the result passes the §5 checklists and the ArchUnit gate without human correction. That is the acceptance test for the whole repo.

## Design decisions (revisable)

- **One reference project, not many micro-examples.** The transfers example already threads through both playbooks; a single coherent feature shows how the pieces meet, which fragments cannot.
- **Anti-patterns are real code.** A bad example that doesn't compile teaches nothing about *why* it's tempting; the gallery keeps them compiling and lets the enforcement rules condemn them.
- **The adversarial review stays a first-class document.** Its amendments get applied to the playbooks (Phase 7), but the argument itself is preserved — agents and humans both need the "where this rule genuinely loses" context to avoid cargo-cult compliance.
