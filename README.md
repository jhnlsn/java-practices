# Java Practices

Engineering practices for Java code that is cheap to test, with working code to prove it.

The practices target Spring Boot 3.x on Java 21+. They come as two directive playbooks, written so an engineer or an AI agent can apply them without interpretation, and a reference implementation where every rule and template exists as compiling, tested code. If a template stops compiling or a test stops passing, CI fails, so the examples cannot drift from the rules.

## Start here

**Engineers.** Read the two playbooks in order, then read the reference implementation to see the rules applied to one complete feature. The adversarial review is the third read: it argues where each rule genuinely loses, so you can decide what to adopt for a given codebase instead of applying everything by reflex.

**AI agents.** [AGENTS.md](AGENTS.md) is the entry point. It gives the reading order, a task → playbook section → canonical file table, and the rules of engagement. Both playbooks end with a §9 "Instructions for an AI Assistant" section that is the operational contract.

## The documents

| Document | What it answers |
|---|---|
| [Development playbook](docs/java-development-playbook.md) | How to *write* code: hexagonal architecture with a framework-free domain core, ports at every boundary you don't own, use cases as the application API, sealed result types, injected clocks. Starts with a scope section that says which code it governs and gives plain CRUD a sanctioned shortcut. |
| [Testing playbook](docs/java-testing-playbook.md) | How to *test* it: test portfolio proportions, Testcontainers over H2, never mock owned classes, meta-annotations for context caching, builders, quality gates with mutation testing as a trend and a human-owned flake policy. |
| [Adversarial review](docs/playbook-adversarial-review.md) | Prosecution and defense of every major decision above, ending in a summary-judgment table. Read it before concluding a rule doesn't fit your situation. Its amendments are already folded into the playbooks. |

The two playbooks are companions. Every structural rule in the development playbook exists to make a testing rule cheap to follow, and every testing rule assumes the structure. Apply them together.

## The reference implementation

[`examples/transfers`](examples/transfers) is a small money-transfer service: accounts with balances, a transfer policy, cross-currency conversion through an external FX provider, and an asynchronously written ledger. It is deliberately small, but it exercises every rule in both playbooks, and the playbooks' code templates link to these files as their canonical form. Where a snippet in the docs and the code differ, the code wins.

```
examples/transfers/src
├── main/java/com/example/transfers/
│   ├── domain/            Money, Account, TransferPolicy, TransferDecision, and port/ (Accounts, FxRates, LedgerEvents)
│   ├── application/       TransferUseCase, TransferResult, AccountNotFound
│   └── adapter/
│       ├── web/           controller, wire DTOs, error handler (all package-private)
│       ├── persistence/   JpaAccounts, JPA entities, async LedgerEntryRecorder
│       ├── events/        SpringLedgerEvents
│       ├── fx/            HttpFxRates
│       └── config/        TransfersConfiguration (policy and Clock beans)
└── test/java/com/example/transfers/
    ├── domain/            pure unit tests, no Spring
    ├── adapter/web/       @WebMvcTest slice
    ├── adapter/fx/        WireMock double for the FX boundary
    ├── TransferFlowIT     full flow over HTTP against real Postgres
    ├── architecture/      ArchUnit rules, including what may be mocked
    └── support/           @IntegrationTest, TestcontainersConfiguration, builders
```

Each test class demonstrates one row of the testing playbook's portfolio, and the two ArchUnit classes make the development playbook's structure rules fail the build instead of a code review.

### Running it

You need Java 21 and a Docker daemon (Testcontainers starts Postgres for the integration tests). The Gradle root is `examples/`.

```bash
cd examples
./gradlew test               # unit, slice, and ArchUnit tests; no containers
./gradlew integrationTest    # *IT classes against real Postgres and WireMock
./gradlew pitest             # mutation report for the domain packages
```

The CI workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs the same tasks in the playbook's PR-gate order: compile, then unit and slice tests, then integration tests. Mutation testing runs alongside as a non-blocking job that uploads its report.

## The anti-pattern gallery

[`examples/antipatterns`](examples/antipatterns) turns the "What Bad Looks Like" tables from both playbooks into compiling bad/good pairs. Every bad specimen compiles on each build but never runs, and its javadoc names the playbook row it violates and points at the fix. The [gallery README](examples/antipatterns/README.md) maps every table row to its exhibit.

## Applying the practices to your own project

- **Check scope first.** The development playbook's §0 says which code gets the full structure and which code gets the plain-CRUD shortcut.
- **New code** follows the templates in dev §3 and testing §4. Copy the canonical files rather than reinventing them.
- **Existing codebases** follow the phased application plans in dev §8 and testing §8. Each phase leaves the code better even if you stop there.
- **Enforce, don't remind.** Add the ArchUnit rules from dev §7 to your fast test suite, and split unit and integration tasks per testing §7.

## Contributing

- The playbooks are the product. Rules, thresholds, and verdicts in `docs/` change only on explicit human direction; wording and formatting fixes are welcome.
- Docs are canonical for rules and rationale; code is canonical for examples. A change to an example touches both in the same commit.
- CI checks that every repo path referenced from markdown exists (`scripts/check_doc_refs.py`). When you move or rename a file the docs point at, update the docs in the same commit.
- Notes on how the repo was built go under `docs/process/`, not into the README or the playbooks.

## Project notes

How this repository came to be, the roadmap that built it, its design decisions, and the record of an agent delivering a feature from the docs alone are kept separately in [docs/process/](docs/process/README.md). None of it is needed to apply the playbooks.

## License

[MIT](LICENSE).
