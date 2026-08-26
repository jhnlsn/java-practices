# Java Development Playbook (Spring Boot 3.x, Java 21+)

> **Companion to `java-testing-playbook.md`.** That document defines how to test; this one defines how to write code so those tests are the natural, cheap way to work. Every rule here exists to make a rule there enforceable. Same format: directives and decision rules, executable by an engineer or an AI assistant without interpretation.

**The one-line strategy:** Hexagonal architecture with a framework-free domain core, ports at every boundary you don't own, thin adapters, and use-case classes as the application's public API. Testability is not a property you add — it is the observable result of this structure.

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

```
com.example.transfers
├── domain/
│   ├── Account.java              // aggregate root
│   ├── Money.java                // value object (record)
│   ├── TransferPolicy.java       // pure business rules
│   ├── TransferDecision.java     // sealed result type
│   └── port/
│       ├── Accounts.java         // driven port (repository interface)
│       ├── FxRates.java          // driven port (external API interface)
│       └── LedgerEvents.java     // driven port (event publishing interface)
├── application/
│   └── TransferUseCase.java      // driving port implementation; orchestration only
└── adapter/
    ├── web/
    │   ├── TransferController.java
    │   └── TransferRequest.java  // wire DTO, never leaks inward
    ├── persistence/
    │   ├── JpaAccounts.java      // implements domain.port.Accounts
    │   └── AccountJpaEntity.java // JPA entity, never leaks inward
    └── fx/
        └── HttpFxRates.java      // implements domain.port.FxRates
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

```java
public record Money(BigDecimal amount, Currency currency) {
    public Money {
        Objects.requireNonNull(amount);
        Objects.requireNonNull(currency);
        if (amount.scale() > currency.getDefaultFractionDigits())
            throw new IllegalArgumentException("scale exceeds currency precision");
    }

    public Money plus(Money other) {
        requireSameCurrency(other);
        return new Money(amount.add(other.amount), currency);
    }
    // No setters. Operations return new instances.
}
```

### 3.2 Domain policy — pure, sealed result

```java
public class TransferPolicy {
    public TransferDecision evaluate(Account from, Money amount) {
        if (from.balance().isLessThan(amount))
            return TransferDecision.rejected(RejectionReason.INSUFFICIENT_FUNDS);
        if (from.status() == AccountStatus.SUSPENDED)
            return TransferDecision.rejected(RejectionReason.ACCOUNT_SUSPENDED);
        return TransferDecision.approved();
    }
}

public sealed interface TransferDecision permits Approved, Rejected { ... }
```

Return decisions as values; never throw exceptions for expected business outcomes. Sealed types + pattern matching make unhandled cases a compile error, not a missing test.

### 3.3 Port — domain-owned interface, domain vocabulary

```java
// domain/port/FxRates.java — note: domain types in the signature, no HTTP vocabulary
public interface FxRates {
    ExchangeRate rateFor(CurrencyPair pair);
}
```

### 3.4 Use case — orchestration only

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
        var decision = policy.evaluate(source, amount);          // decide: domain
        return switch (decision) {
            case Rejected r -> TransferResult.rejected(r.reason());
            case Approved a -> {
                var target = accounts.byId(to).orElseThrow(() -> new AccountNotFound(to));
                source.debit(amount); target.credit(amount);      // mutate: aggregates
                accounts.save(source); accounts.save(target);     // I/O: ports
                events.publish(new TransferCompleted(from, to, amount, clock.instant()));
                yield TransferResult.completed();
            }
        };
    }
}
```

The use case contains **no** `if` statements about business rules. If one appears, that logic belongs in the domain.

### 3.5 Adapter — translate, delegate, nothing else

```java
@RestController
class TransferController {
    private final TransferUseCase useCase;

    @PostMapping("/transfers")
    ResponseEntity<TransferResponse> transfer(@Valid @RequestBody TransferRequest req) {
        var result = useCase.transfer(req.fromId(), req.toId(), req.toMoney());
        return switch (result.status()) {
            case COMPLETED -> ResponseEntity.status(CREATED).body(TransferResponse.of(result));
            case REJECTED  -> ResponseEntity.unprocessableEntity().body(TransferResponse.of(result));
        };
    }
}
```

### 3.6 Wiring — constructor injection, always

- Constructor injection only. `@Autowired` on fields is banned (untestable without reflection or a container).
- Provide `Clock` as a bean (`Clock.systemUTC()` in prod); tests inject `Clock.fixed(...)`.
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

1. **ArchUnit tests** in the unit suite (they're fast — testing playbook §7.1 `test` task):

```java
@AnalyzeClasses(packages = "com.example")
class ArchitectureTest {

    @ArchTest
    static final ArchRule domainIsFrameworkFree =
        noClasses().that().resideInAPackage("..domain..")
            .should().dependOnClassesThat()
            .resideInAnyPackage("org.springframework..", "jakarta.persistence..",
                                "com.fasterxml..");

    @ArchTest
    static final ArchRule adaptersDontTalkToEachOther =
        slices().matching("..adapter.(*)..").should().notDependOnEachOther();

    @ArchTest
    static final ArchRule noFieldInjection =
        noFields().should().beAnnotatedWith(Autowired.class);
}
```

2. Add `com.tngtech.archunit:archunit-junit5` to test dependencies (extend testing playbook §3.1).
3. These run in the same CI gate as unit tests — an architecture violation fails the build exactly like a failing test.

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

1. **Classify before coding** using §2.3: decide, sequence, or translate. Place the code in the matching ring. If a requested change spans rings, implement it as separate classes per ring.
2. **Copy the templates** in §3; do not invent alternative structures for the same job.
3. **Never put a business rule in a use case or adapter.** If you find yourself writing a business `if` outside the domain, stop and extract a policy first.
4. **Never introduce a mock to make code testable.** Missing testability is a structure defect: propose the extraction (§6 required-fix column) instead. This mirrors testing playbook §9.7 from the production-code side.
5. **When adding a dependency on time, randomness, IDs, or any external system**, introduce or reuse a port and inject it — even if the immediate task doesn't test it.
6. **Self-review** against §5 and §6 before presenting code. Any §6 row that applies means rewrite, not caveat.
7. **When editing legacy code that violates this document**, apply the smallest §8 Phase 2 motion that covers the code you're touching, and state which violations remain.
8. **Keep the two playbooks consistent:** every class you create must have an obvious home in the testing playbook's portfolio (§2 there). If it doesn't, its design is wrong.
