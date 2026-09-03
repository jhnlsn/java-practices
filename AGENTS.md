# Agent Guide

This repository defines engineering practices for testable Java (Spring Boot 3.x, Java 21+): two directive playbooks, a runnable reference implementation in `examples/transfers`, and an anti-pattern gallery in `examples/antipatterns`. [README.md](README.md) maps what exists and how to run it. Notes on how the repo was built live under `docs/process/` and are not needed to apply the playbooks.

## Reading order

1. [docs/java-development-playbook.md](docs/java-development-playbook.md) — how to structure code so it is cheap to test.
2. [docs/java-testing-playbook.md](docs/java-testing-playbook.md) — how to test it. The two are companions: every structural rule exists to make a testing rule enforceable.
3. [docs/playbook-adversarial-review.md](docs/playbook-adversarial-review.md) — where each rule genuinely loses. Read this before concluding a rule doesn't fit the situation.

## How to apply the playbooks to code

- Both playbooks end with a §9 "Instructions for an AI Assistant" section. Follow those literally; they are the operational contract.
- **Check scope first** (dev playbook §0): plain CRUD with no business branching gets the sanctioned shortcut, not the full rings.
- **Classify before coding** (dev playbook §2.3): does the code decide, sequence, or translate? Place it in the matching ring.
- **Copy the canonical files** in `examples/transfers` — the playbooks' §3/§4 templates link to them, and where a snippet and the code differ, the code wins. The "reject on sight" tables have compiling exhibits in `examples/antipatterns`.
- **Self-review** against both "What Good Looks Like" checklists (§5) and "What Bad Looks Like" tables (§6) before presenting code. Any §6 match means rewrite, not caveat.
- **Escape valve** (both playbooks §9): if following a rule produces obviously disproportionate ceremony for the code at hand, stop and surface the conflict to a human instead of silently complying — or silently deviating.

## Task → section → canonical file

Paths are under `examples/transfers/src/{main,test}/java/com/example/transfers/`.

| You are asked to… | Read first | Copy the shape of |
|---|---|---|
| Add or change a business rule | dev §2.3, §3.2 | `domain/TransferPolicy.java`, `domain/TransferDecision.java` |
| Add a value object | dev §3.1 | `domain/Money.java` |
| Depend on time, randomness, or IDs | dev §3.6 | `Clock` in `application/TransferUseCase.java` + `adapter/config/TransfersConfiguration.java` |
| Talk to a database, API, or broker | dev §3.3 | `domain/port/` + `adapter/fx/HttpFxRates.java` or `adapter/persistence/JpaAccounts.java` |
| Orchestrate a new operation | dev §3.4 | `application/TransferUseCase.java`, `application/TransferResult.java` |
| Add an HTTP endpoint | dev §3.5 | `adapter/web/` (controller, DTOs, error handler — package-private) |
| Test pure logic | testing §4.1 | `domain/TransferPolicyTest.java` |
| Test an endpoint's HTTP concerns | testing §4.2 | `adapter/web/TransferControllerTest.java` |
| Test a flow through real infra | testing §4.3, §4.5 | `TransferFlowIT.java` |
| Double an external HTTP API | testing §4.4 | `adapter/fx/FxRateClientIT.java` |
| Recognize and fix bad existing code | dev §6, testing §6.1 | the bad/good pairs in [`examples/antipatterns`](examples/antipatterns/README.md) |
| Enforce structure | dev §7 | `architecture/ArchitectureTest.java`, `architecture/MockUsageTest.java` |

## Rules of engagement for this repo itself

- The playbooks are the product. Never change a rule, threshold, or verdict in `docs/` without explicit human direction; wording/formatting fixes are fine.
- Docs are canonical for rules and rationale; code is canonical for examples. A change to an example touches both, in the same commit.
- The adversarial review's §11 amendments are folded into the playbooks; the review remains the rationale behind them. Apply the playbooks as written.
- Keep process out of the guide. The README and the playbooks describe the practices and the code; how something was built, what a run found, and roadmap history belong under `docs/process/`.
- CI checks that every repo path referenced from markdown exists (`scripts/check_doc_refs.py`) — when you move or rename a file the docs point at, update the docs in the same commit.
