# Agent Guide

This repository defines engineering practices for testable Java (Spring Boot 3.x, Java 21+). It is mid-migration from markdown-only playbooks to a repo with a working reference implementation. The roadmap and current phase status live in [README.md](README.md) — **unchecked phases do not exist yet**; do not assume `examples/` code is present until the roadmap says so.

## Reading order

1. [docs/java-development-playbook.md](docs/java-development-playbook.md) — how to structure code so it is cheap to test.
2. [docs/java-testing-playbook.md](docs/java-testing-playbook.md) — how to test it. The two are companions: every structural rule exists to make a testing rule enforceable.
3. [docs/playbook-adversarial-review.md](docs/playbook-adversarial-review.md) — where each rule genuinely loses. Read this before concluding a rule doesn't fit the situation.

## How to apply the playbooks to code

- Both playbooks end with a §9 "Instructions for an AI Assistant" section. Follow those literally; they are the operational contract.
- **Classify before coding** (dev playbook §2.3): does the code decide, sequence, or translate? Place it in the matching ring.
- **Copy the canonical templates** (dev playbook §3, testing playbook §4) rather than inventing alternative structures. Once the reference implementation exists under `examples/`, its files supersede the inline snippets as the copy-source.
- **Self-review** against both "What Good Looks Like" checklists (§5) and "What Bad Looks Like" tables (§6) before presenting code. Any §6 match means rewrite, not caveat.
- **Escape valve:** if following a rule produces obviously disproportionate ceremony for the code at hand (e.g., full hexagonal rings for a trivial CRUD endpoint), stop and surface the conflict to a human instead of silently complying — or silently deviating. See the adversarial review §10.

## Rules of engagement for this repo itself

- The playbooks are the product. Never change a rule, threshold, or verdict in `docs/` without explicit human direction; wording/formatting fixes are fine.
- Docs are canonical for rules and rationale; code (once it exists) is canonical for examples. A change to an example touches both, in the same commit.
- Work follows the README roadmap. When you complete a roadmap item, check it off in README.md in the same commit as the work.
- The adversarial review's amendments are scheduled to be folded into the playbooks in Phase 7 — until then, apply the playbooks as written and treat the review as advisory context.
