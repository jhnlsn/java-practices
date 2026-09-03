# Java Development Playbook (Spring Boot 3.x, Java 21+)

> **Companion to the [testing playbook](java-testing-playbook.md).** That document defines how to test; this one defines how to write code so those tests are the natural, cheap way to work. Every rule here exists to make a rule there enforceable. Same format: directives and decision rules, executable by an engineer or an AI assistant without interpretation.

**The one-line strategy:** Hexagonal architecture with a framework-free domain core, ports at every boundary you don't own, thin adapters, and use-case classes as the application's public API. Testability is not a property you add — it is the observable result of this structure.

**Canonical code:** every template in this document exists as real, tested code in [`examples/transfers`](../examples/transfers). Where a snippet here and that code differ, the code wins.

---

## 0. Scope — read this first

This playbook governs **logic-bearing code**: features with business rules worth protecting. Applied to code without that weight, its structure is ceremony (adversarial review §3). Calibrate before you build:

- **Features with real domain logic** get the full structure: three rings, ports, separate JPA types, sealed results.
- **Plain CRUD may skip the rings — deliberately and locally.** A feature that only validates shape and moves rows may use `@Entity`-as-model with Spring Data and a thin controller, provided (a) it contains no business branching, (b) the shortcut stays confined to that feature's package, and (c) it keeps one integration smoke test of schema + serialization. The moment a business rule appears, apply §8 Phase 2 and carve out a domain.
- **Split JPA entities from domain models where the domain has behavior** (adversarial review §4). A mapping layer between two structurally identical types is waste; entity-as-model is acceptable for behavior-free aggregates.
- **Escape valve:** if following a rule produces obviously disproportionate ceremony for the code at hand, stop and surface the conflict to a human instead of silently complying — or silently deviating (adversarial review §10).

---

## 1. Core Principles

1. **The domain owes Spring nothing.** Business logic lives in plain Java classes with zero framework imports. If a class contains a business rule, it must be instantiable with `new` in a unit test. (Enables: testing playbook §4.1, portfolio share §2.)
2. **Dependencies point inward.** Adapters depend on the domain; the domain depends on nothing but the JDK and its own types. Enforced, not aspirational (§7).
3. **Every boundary you don't own gets a port.** Database, external HTTP, message broker, clock, randomness, file system — each is an interface defined by the domain, implemented by an adapter. Ports are the *only* place the testing playbook permits doubles (its §6.3).
4. **Logic and I/O never share a class.** A class either decides things (pure, unit-testable) or moves data (thin, integration-tested). A class that does both forces mocking — which the testing playbook bans.
5. **Make illegal states unrepresentable.** Types, records, and validating constructors over defensive null-checking and comment-documented invariants. Code that can't enter a bad state needs no tests for that state.
6. **Immutability by default.** Records for values, unmodifiable collections, no setters. Mutation is confined to aggregate roots and adapter internals.
7. **Explicit over ambient.** Time, randomness, IDs, and configuration enter through constructors or method parameters — never `LocalDateTime.now()`, `new Random()`, or static lookups mid-method.

---

## 2. Architecture: Hexagonal, Pragmatically

### 2.1 The three rings

| Ring | Contents | Framework allowed | Tested by (testing playbook §) |
|---|---|---|---|
| **Domain** | Entities, value objects, domain services, policies, port interfaces | None (JDK only) | Unit tests, §4.1 |
| **Application** | Use cases orchestrating domain + ports; transaction boundaries | Spring annotations on the class only (`@Service`, `@Transactional`) | Integration tests, §4.3 |
| **Adapters** | REST controllers, JPA repositories, HTTP clients, Kafka listeners, config | Full Spring | Slice tests §4.2, integration §4.3, WireMock §4.4 |

### 2.2 Package structure (canonical)

This is the actual layout of [`examples/transfers`](../examples/transfers/src/main/java/com/example/transfers):

```
com.example.transfers
├── domain/
│   ├── Account.java                   // aggregate root — the only mutation in the domain
│   ├── AccountId.java, AccountStatus.java
│   ├── Money.java                     // value object (record, validating constructor)
│   ├── TransferPolicy.java            // pure business rules
│   ├── TransferDecision.java          // sealed result type (+ RejectionReason.java)
│   ├── CurrencyPair.java, ExchangeRate.java, TransferCompleted.java
│   └── port/
│       ├── Accounts.java              // driven port (repository interface)
│       ├── FxRates.java               // driven port (+ FxUnavailable, its declared failure mode)
│       └── LedgerEvents.java          // driven port (event publishing interface)
├── application/
│   ├── TransferUseCase.java           // orchestration only; the application's API
│   ├── TransferResult.java            // sealed outcome value
│   └── AccountNotFound.java           // abort, not decision → exception (§3.2)
└── adapter/
    ├── web/                           // TransferController, wire DTOs, error handler — all package-private
    ├── persistence/                   // JpaAccounts, JPA entities, async LedgerEntryRecorder
    ├── events/                        // SpringLedgerEvents: LedgerEvents over Spring's event bus
    ├── fx/                            // HttpFxRates: FxRates over HTTP, WireMock-tested
    └── config/                        // TransfersConfiguration: policy + Clock beans (§3.6)
```

Rules:
- Package by feature (`transfers`, `customers`), then by ring — not `controllers/`, `services/`, `repositories/` at the top level.
- Wire DTOs and JPA entities are adapter-private. Mapping to domain types happens at the adapter edge, always.
- One use case class per business operation cluster. Its public methods ARE the application's API — the thing integration tests exercise through HTTP.

### 2.3 Decision rule: where does this code go?

- Does it decide something based on business rules? → **Domain.** No I/O allowed inside.
- Does it sequence steps (load, decide, save, publish)? → **Application use case.** No decisions allowed inside — delegate to domain.
- Does it translate between the outside world and domain types? → **Adapter.** No decisions, no sequencing.
- Can't tell? The class is doing two of these. Split it.

---

## 3. Canonical Code Templates

### 3.1 Value object — record with validating constructor

Canonical file: [`domain/Money.java`](../examples/transfers/src/main/java/com/example/transfers/domain/Money.java)

```java
public record Money(BigDecimal amount, Currency currency) {

    public Money {
        Objects.requireNonNull(amount, "amount");
        Objects.requireNonNull(currency, "currency");
        int precision = currency.getDefaultFractionDigits();
        if (precision < 0) {
            throw new IllegalArgumentException("pseudo-currency not supported: " + currency);
        }
        if (amount.scale() > precision) {
            throw new IllegalArgumentException(
                    "scale %d exceeds %s precision of %d".formatted(amount.scale(), currency, precision));
        }
        // Canonical scale, so 2.5 USD and 2.50 USD are the same value.
        amount = amount.setScale(precision);
    }

    public Money plus(Money other) {
        requireSameCurrency(other);
        return new Money(amount.add(other.amount), currency);
    }
    // minus, isLessThan, isPositive, isNegative — same shape. No setters.
}
```

The canonical-scale line and the pseudo-currency guard are the two parts of this template that get left out: `BigDecimal.equals` is scale-sensitive, so `2.5` and `2.50` are unequal without it, and `getDefaultFractionDigits()` returns −1 for XAU-style codes. Both are pinned by [`MoneyTest`](../examples/transfers/src/test/java/com/example/transfers/domain/MoneyTest.java).

### 3.2 Domain policy — pure, sealed result

Canonical files: [`domain/TransferPolicy.java`](../examples/transfers/src/main/java/com/example/transfers/domain/TransferPolicy.java), [`domain/TransferDecision.java`](../examples/transfers/src/main/java/com/example/transfers/domain/TransferDecision.java)

```java
public class TransferPolicy {
    public TransferDecision evaluate(Account from, Money amount) {
        if (from.balance().isLessThan(amount)) {
            return TransferDecision.rejected(RejectionReason.INSUFFICIENT_FUNDS);
        }
        if (from.status() == AccountStatus.SUSPENDED) {
            return TransferDecision.rejected(RejectionReason.ACCOUNT_SUSPENDED);
        }
        return TransferDecision.approved();
    }
}

// Nested records keep the whole sealed hierarchy in one file — no permits clause needed.
public sealed interface TransferDecision {
    record Approved() implements TransferDecision {}
    record Rejected(RejectionReason reason) implements TransferDecision {}
    static TransferDecision approved() { return new Approved(); }
    static TransferDecision rejected(RejectionReason reason) { return new Rejected(reason); }
}
```

Return **decisions** as values; never throw exceptions for expected business outcomes. Sealed types + pattern matching make unhandled cases a compile error, not a missing test.

**Aborts are exceptions** (adversarial review §5). Invariant violations and missing referents throw — [`Account.debit`](../examples/transfers/src/main/java/com/example/transfers/domain/Account.java)'s insufficient-funds guard (reaching it means orchestration skipped the policy: a bug, not an outcome) and [`AccountNotFound`](../examples/transfers/src/main/java/com/example/transfers/application/AccountNotFound.java) are the canonical pair. The dividing line is `@Transactional`: an exception rolls the transaction back, a result value silently commits whatever already happened, so anything that must abort uses the exception path.

### 3.3 Port — domain-owned interface, domain vocabulary

Canonical files: [`domain/port/FxRates.java`](../examples/transfers/src/main/java/com/example/transfers/domain/port/FxRates.java), [`domain/port/Accounts.java`](../examples/transfers/src/main/java/com/example/transfers/domain/port/Accounts.java), [`domain/port/LedgerEvents.java`](../examples/transfers/src/main/java/com/example/transfers/domain/port/LedgerEvents.java)

```java
// domain/port/FxRates.java — note: domain types in the signature, no HTTP vocabulary
public interface FxRates {
    ExchangeRate rateFor(CurrencyPair pair);
}
```

A port may also declare its failure mode — [`FxUnavailable`](../examples/transfers/src/main/java/com/example/transfers/domain/port/FxUnavailable.java) is the exception the adapter throws when the boundary is down (an abort, per §3.2), keeping even the failure vocabulary domain-owned.

### 3.4 Use case — orchestration only

Canonical files: [`application/TransferUseCase.java`](../examples/transfers/src/main/java/com/example/transfers/application/TransferUseCase.java), [`application/TransferResult.java`](../examples/transfers/src/main/java/com/example/transfers/application/TransferResult.java)

```java
@Service
public class TransferUseCase {
    private final Accounts accounts;
    private final TransferPolicy policy;
    private final LedgerEvents events;
    private final Clock clock;                     // time is a dependency

    public TransferUseCase(Accounts accounts, TransferPolicy policy,
                           LedgerEvents events, Clock clock) { ... }

    @Transactional
    public TransferResult transfer(AccountId from, AccountId to, Money amount) {
        var source = accounts.byId(from).orElseThrow(() -> new AccountNotFound(from));
        var decision = policy.evaluate(source, amount);              // decide: domain
        return switch (decision) {
            case TransferDecision.Rejected(var reason) -> TransferResult.rejected(reason);
            case TransferDecision.Approved() -> {
                var target = accounts.byId(to).orElseThrow(() -> new AccountNotFound(to));
                source.debit(amount);
                target.credit(amount);                               // mutate: aggregates
                accounts.save(source);
                accounts.save(target);                               // I/O: ports
                events.publish(new TransferCompleted(from, to, amount, clock.instant()));
                yield TransferResult.completed();
            }
        };
    }
}
```

The use case contains **no** `if` statements about business rules. If one appears, that logic belongs in the domain. `TransferResult` is itself a small sealed type — the application's outcome value, distinct from the domain's decision.

### 3.5 Adapter — translate, delegate, nothing else

Canonical files: [`adapter/web/TransferController.java`](../examples/transfers/src/main/java/com/example/transfers/adapter/web/TransferController.java) and siblings — all package-private, so no other adapter can reach in.

```java
@RestController
class TransferController {
    private final TransferUseCase useCase;

    TransferController(TransferUseCase useCase) { this.useCase = useCase; }

    @PostMapping("/transfers")
    ResponseEntity<TransferResponse> transfer(@Valid @RequestBody TransferRequest request) {
        var result = useCase.transfer(request.fromId(), request.toId(), request.toMoney());
        return switch (result) {
            case TransferResult.Completed() ->
                    ResponseEntity.status(HttpStatus.CREATED).body(TransferResponse.completed());
            case TransferResult.Rejected(var reason) ->
                    ResponseEntity.unprocessableEntity().body(TransferResponse.rejected(reason));
        };
    }
}
```

Shape validation failures and requests that can't become domain values map to 422 in [`TransferErrorHandler`](../examples/transfers/src/main/java/com/example/transfers/adapter/web/TransferErrorHandler.java); `AccountNotFound` maps to 404. The persistence edge follows the same translate-only rule — see [`JpaAccounts`](../examples/transfers/src/main/java/com/example/transfers/adapter/persistence/JpaAccounts.java) and [`AccountJpaEntity`](../examples/transfers/src/main/java/com/example/transfers/adapter/persistence/AccountJpaEntity.java), where persistence quirks (column scale vs. `Money`'s canonical scale) are normalized at the edge.

### 3.6 Wiring — constructor injection, always

Canonical file: [`adapter/config/TransfersConfiguration.java`](../examples/transfers/src/main/java/com/example/transfers/adapter/config/TransfersConfiguration.java)

- Constructor injection only. `@Autowired` on fields is banned (untestable without reflection or a container) — and enforced by ArchUnit (§7).
- Provide `Clock` as a bean (`Clock.systemUTC()` in prod); tests inject `Clock.fixed(...)`.
- Domain classes carry no annotations, so their beans (e.g. `TransferPolicy`) are declared in the config adapter.
- ID generation behind a port (`IdGenerator`) if IDs matter to behavior.

---

## 4. Development Workflow

1. **Start with the domain.** Model the types and rules first (records, sealed results, policies) with unit tests as you go. No Spring context has been started yet.
2. **Define ports** for whatever I/O the use case will need — interface only, domain vocabulary.
3. **Write the use case** against the ports. It compiles before any adapter exists.
4. **Write the integration test first** for the full flow (testing playbook §4.3) — it fails, and now defines "done."
5. **Implement adapters** until the integration test passes.
6. **Slice-test adapter edge cases** (validation, status codes, serialization quirks).

This ordering is testing-playbook-shaped TDD: unit tests fall out of step 1, the integration test drives steps 4–5, and mocking never becomes necessary because ports exist before implementations.

---

## 5. What Good Looks Like (review checklist)

- [ ] Domain packages import nothing from `org.springframework`, `jakarta.persistence`, or `com.fasterxml`.
- [ ] Every business rule is reachable via `new` + method call — no container required.
- [ ] Use case methods read as a sequence of steps with no business `if`s.
- [ ] All external systems are behind domain-owned port interfaces.
- [ ] Value objects are records with validating constructors; no public setters anywhere in domain.
- [ ] Expected business failures are result values (sealed types), not exceptions.
- [ ] `Clock`, randomness, and ID generation are injected.
- [ ] Wire DTOs and JPA entities never appear in domain or application signatures.
- [ ] Constructor injection everywhere; no field `@Autowired`.

---

## 6. What Bad Looks Like (reject on sight)

| Anti-pattern | Why it breaks testability | Required fix |
|---|---|---|
| `@Service` with business logic + repository calls interleaved | Can only be tested by mocking own repository — banned | Extract rules to domain policy; service becomes use case |
| Anemic domain + fat service | All logic needs a container or mocks to reach | Move behavior onto entities/policies |
| JPA entity used as domain model | Persistence concerns infect logic; lazy-loading surprises in tests | Separate JPA entity in adapter; map at edge |
| `LocalDateTime.now()` / `new Random()` inline | Nondeterministic tests or untestable branches | Inject `Clock` / port |
| Static utility with I/O (`FileUtils.read` mid-logic) | Unmockable, unswappable | Port + adapter |
| Business exceptions for expected outcomes (`InsufficientFundsException` as control flow) | Forces try/catch assertions; hides cases from the type system | Sealed result types |
| Setters on domain objects | Invalid intermediate states; tests must know mutation order | Validating constructors; operations return new state |
| Controller calling repository directly | Logic has nowhere to live but the controller | Introduce use case |
| God use case (10+ dependencies) | Integration tests become unreadable; everything couples | Split by business operation |
| Domain importing `@Component`, `@Entity`, `@JsonProperty` | Domain no longer instantiable framework-free | Move annotation to adapter type; map |

---

## 7. Enforcement (make violations impossible to merge)

Structure rules that live only in a document decay. Encode them:

1. **ArchUnit tests** in the unit suite (they're fast — testing playbook §7.1 `test` task). Canonical file: [`architecture/ArchitectureTest.java`](../examples/transfers/src/test/java/com/example/transfers/architecture/ArchitectureTest.java)

```java
@AnalyzeClasses(packages = "com.example.transfers",
        importOptions = ImportOption.DoNotIncludeTests.class)
class ArchitectureTest {

    @ArchTest
    static final ArchRule domainIsFrameworkFree =
        noClasses().that().resideInAPackage("..domain..")
            .should().dependOnClassesThat()
            .resideInAnyPackage("org.springframework..", "jakarta.persistence..",
                                "com.fasterxml..");

    // Core principle #2 — dependencies point inward. Enforced, not aspirational.
    @ArchTest
    static final ArchRule dependenciesPointInward =
        layeredArchitecture().consideringOnlyDependenciesInLayers()
            .layer("Domain").definedBy("..domain..")
            .layer("Application").definedBy("..application..")
            .layer("Adapters").definedBy("..adapter..")
            .whereLayer("Adapters").mayNotBeAccessedByAnyLayer()
            .whereLayer("Application").mayOnlyBeAccessedByLayers("Adapters")
            .whereLayer("Domain").mayOnlyBeAccessedByLayers("Application", "Adapters");

    @ArchTest
    static final ArchRule adaptersDontTalkToEachOther =
        slices().matching("..adapter.(*)..").should().notDependOnEachOther();

    @ArchTest
    static final ArchRule noFieldInjection =
        noFields().should().beAnnotatedWith(Autowired.class);
}
```

2. A second class, [`architecture/MockUsageTest.java`](../examples/transfers/src/test/java/com/example/transfers/architecture/MockUsageTest.java), analyzes **test** classes and restricts `@MockitoBean`/`@Mock` fields to types in `domain.port` or `application` — the enforcement half of testing playbook §6.3.
3. Add `com.tngtech.archunit:archunit-junit5` to test dependencies (extend testing playbook §3.1). Match ArchUnit's major line to the JUnit Platform your Spring Boot manages — see the comment in [`gradle/libs.versions.toml`](../examples/gradle/libs.versions.toml).
4. These run in the same CI gate as unit tests — an architecture violation fails the build exactly like a failing test.

---

## 8. Application Plan (existing codebases)

Each phase is independently valuable; stop anywhere and the code is still better.

**Phase 1 — Stop the bleeding (immediate)**
1. Add ArchUnit rules in *observe* mode: run them, record violations as a frozen baseline (`FreezingArchRule`), fail only on new violations.
2. All new code follows §2–§3. Constructor injection and injected `Clock` from day one.

**Phase 2 — Carve out the domain (per feature, boy-scout rule)**
3. When touching a fat service: extract its business rules into a pure policy/entity method + unit tests, leave the service as orchestration. This is the same PR motion as testing playbook §8 Phase 4 — the mock-removal and the logic-extraction are one refactor.
4. Introduce ports where the service directly uses external clients.

**Phase 3 — Seal the boundaries**
5. Split JPA entities from domain models in the highest-churn features.
6. Convert expected-failure exceptions to sealed results in the domain core.
7. Unfreeze ArchUnit rules package by package as they come clean.

**Definition of done:** ArchUnit baseline is empty; new business logic lands with framework-free unit tests by default; the testing playbook's "never mock owned classes" rule causes zero friction — because structure has removed the need.

---

## 9. Instructions for an AI Assistant Applying This Playbook

When writing or modifying code in a project governed by this document:

1. **Check scope first** (§0): if the code at hand is plain CRUD with no business branching, the sanctioned shortcut applies — don't build rings for it.
2. **Classify before coding** using §2.3: decide, sequence, or translate. Place the code in the matching ring. If a requested change spans rings, implement it as separate classes per ring.
3. **Copy the canonical files** linked from §3 (they live in `examples/transfers`); do not invent alternative structures for the same job.
4. **Never put a business rule in a use case or adapter.** If you find yourself writing a business `if` outside the domain, stop and extract a policy first.
5. **Never introduce a mock to make code testable.** Missing testability is a structure defect: propose the extraction (§6 required-fix column) instead. This mirrors testing playbook §9.7 from the production-code side.
6. **When adding a dependency on time, randomness, IDs, or any external system**, introduce or reuse a port and inject it — even if the immediate task doesn't test it.
7. **Self-review** against §5 and §6 before presenting code. Any §6 row that applies means rewrite, not caveat.
8. **When editing legacy code that violates this document**, apply the smallest §8 Phase 2 motion that covers the code you're touching, and state which violations remain.
9. **Keep the two playbooks consistent:** every class you create must have an obvious home in the testing playbook's portfolio (§2 there). If it doesn't, its design is wrong.
10. **Escape valve (§0):** if following a rule produces obviously disproportionate ceremony for the code at hand, stop and surface the conflict to a human — never silently comply, never silently deviate.
