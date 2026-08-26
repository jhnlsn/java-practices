# Java Testing Playbook (Spring Boot 3.x, Java 21+)

> **How to use this document:** This is an executable playbook. When applying it to a project, follow the phases in order. Every rule is written as a directive so an AI assistant or engineer can act on it without interpretation. Code templates are canonical — copy them, don't reinvent them.

---

## 1. Core Principles (apply to every decision)

1. **Test behavior, not implementation.** A test must survive a refactor that preserves behavior. If renaming a private method or swapping an internal collaborator breaks a test, the test is wrong.
2. **Test through public APIs.** Controllers via HTTP, services via their public interface, repositories via real queries against a real database.
3. **Real over fake, at the right cost.** Use real infrastructure (Testcontainers) for databases, brokers, caches. Use test doubles ONLY at boundaries you don't own (external HTTP APIs, third-party SaaS, clocks, randomness).
4. **Never mock a class you own.** No `@Mock MyRepository`, no `@MockBean MyService` to test the class that calls it. If this feels necessary, the production code needs restructuring, not more mocks. (Narrow exception: see §6.3.)
5. **Fast, deterministic, independent.** No `Thread.sleep`, no test-order dependence, no shared mutable state, no wall-clock dependence.
6. **Coverage is a smoke detector, not a goal.** Use mutation score on critical modules as the real quality gate.

---

## 2. The Test Portfolio (what to write, in what proportion)

| Layer | Tooling | Scope | Rough share |
|---|---|---|---|
| Domain unit tests | JUnit 5 + AssertJ, **no Spring** | Pure business logic | 30–40% |
| Slice tests | `@WebMvcTest`, `@DataJpaTest`, `@JsonTest` | One layer + minimal context | 15–20% |
| Integration tests | `@SpringBootTest` + Testcontainers | Full app, real infra | 35–45% |
| Contract tests | Spring Cloud Contract or Pact | Service boundaries | As needed |
| Smoke/E2E | Handful of happy paths | Deployed app | <5% |

**Decision rule for any new test:** Start at the lowest layer that can express the behavior. Business rule with no I/O → unit. Serialization, validation, security on an endpoint → slice. Anything touching persistence, transactions, messaging, or wiring → integration.

---

## 3. Project Setup (Phase 1 — do this first)

### 3.1 Dependencies (Gradle, version catalog style)

```kotlin
// build.gradle.kts (test dependencies)
dependencies {
    testImplementation("org.springframework.boot:spring-boot-starter-test") {
        exclude(group = "org.mockito") // discourage reflexive mocking; re-add only if §6.3 applies
    }
    testImplementation("org.springframework.boot:spring-boot-testcontainers")
    testImplementation("org.testcontainers:junit-jupiter")
    testImplementation("org.testcontainers:postgresql")   // match real infra; NEVER H2
    testImplementation("org.awaitility:awaitility")
    testImplementation("org.wiremock:wiremock-standalone") // doubles for external HTTP only
    testImplementation("org.assertj:assertj-core")
}
```

Rules:
- The test database MUST be the same engine and major version as production. **H2 is banned.**
- If Mockito is genuinely needed (§6.3), add it back explicitly — the friction is intentional.

### 3.2 Meta-annotations (create these before writing any test)

Create one meta-annotation per test type so context configuration is centralized and Spring's context cache actually works.

```java
// src/test/java/.../support/IntegrationTest.java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Import(TestcontainersConfiguration.class)
@ActiveProfiles("test")
public @interface IntegrationTest {}
```

```java
// src/test/java/.../support/TestcontainersConfiguration.java
@TestConfiguration(proxyBeanMethods = false)
public class TestcontainersConfiguration {

    @Bean
    @ServiceConnection
    PostgreSQLContainer<?> postgres() {
        return new PostgreSQLContainer<>("postgres:16")
                .withReuse(true); // requires testcontainers.reuse.enable=true in ~/.testcontainers.properties
    }

    // Add @ServiceConnection beans for Kafka, Redis, etc. as the project needs them.
}
```

**Hard rule:** Test classes never declare their own `@SpringBootTest` config. They use `@IntegrationTest` (or the slice meta-annotations). Every unique context configuration multiplies build time.

### 3.3 Test data builders

Every core domain entity gets a builder in `src/test/java/.../support/`. A test must only state the fields it cares about.

```java
public class CustomerBuilder {
    private String name = "Default Name";
    private CustomerStatus status = CustomerStatus.ACTIVE;

    public static CustomerBuilder aCustomer() { return new CustomerBuilder(); }
    public CustomerBuilder suspended() { this.status = CustomerStatus.SUSPENDED; return this; }
    public CustomerBuilder named(String name) { this.name = name; return this; }
    public Customer build() { return new Customer(name, status); }
}
```

---

## 4. Canonical Templates (Phase 2 — golden paths to copy)

### 4.1 Domain unit test (no Spring)

```java
class TransferPolicyTest {

    private final TransferPolicy policy = new TransferPolicy();

    @Test
    void rejectsTransferWhenBalanceInsufficient() {
        var account = anAccount().withBalance(Money.of(50)).build();

        var result = policy.evaluate(account, Money.of(100));

        assertThat(result).isEqualTo(TransferDecision.rejected(INSUFFICIENT_FUNDS));
    }
}
```

### 4.2 Web slice test

```java
@WebMvcTest(TransferController.class)
class TransferControllerTest {

    @Autowired MockMvc mvc;
    @MockitoBean TransferUseCase transferUseCase; // port boundary — allowed, see §6.3

    @Test
    void returns422WhenAmountIsNegative() throws Exception {
        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"B","amount":-10}
                        """))
           .andExpect(status().isUnprocessableEntity());
    }
}
```

### 4.3 Integration test (the workhorse)

```java
@IntegrationTest
class TransferFlowIT {

    @Autowired TestRestTemplate http;
    @Autowired AccountRepository accounts;

    @Test
    void completedTransferMovesFundsAndRecordsLedgerEntry() {
        accounts.save(anAccount().withId("A").withBalance(Money.of(100)).build());
        accounts.save(anAccount().withId("B").withBalance(Money.of(0)).build());

        var response = http.postForEntity("/transfers",
                new TransferRequest("A", "B", Money.of(40)), TransferResult.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(accounts.findById("A").orElseThrow().balance()).isEqualTo(Money.of(60));
        assertThat(accounts.findById("B").orElseThrow().balance()).isEqualTo(Money.of(40));
    }
}
```

### 4.4 External API double (WireMock)

```java
@IntegrationTest
class FxRateClientIT {

    @RegisterExtension
    static WireMockExtension fxApi = WireMockExtension.newInstance()
            .options(wireMockConfig().dynamicPort()).build();

    @DynamicPropertySource
    static void props(DynamicPropertyRegistry registry) {
        registry.add("fx.base-url", fxApi::baseUrl);
    }

    @Test
    void fallsBackToCachedRateWhenProviderTimesOut() {
        fxApi.stubFor(get(urlPathEqualTo("/rates/EUR"))
                .willReturn(aResponse().withFixedDelay(5_000)));
        // ... assert fallback behavior
    }
}
```

### 4.5 Async assertions

```java
await().atMost(Duration.ofSeconds(5))
       .untilAsserted(() -> assertThat(outbox.pendingEvents()).isEmpty());
```

`Thread.sleep` in a test is a build-breaking offense.

---

## 5. What Good Looks Like (review checklist)

Check every PR's tests against this list. All must be true:

- [ ] Test name states a behavior/requirement, not a method name (`rejectsX...`, not `testEvaluate`).
- [ ] Follows given/when/then, visibly separated (blank lines suffice).
- [ ] Only test-relevant data is explicit; everything else comes from builders' defaults.
- [ ] Assertions target observable outcomes (response, DB state, published event) — not interactions.
- [ ] No mocks of owned classes (see §6.3 for the sole exception).
- [ ] Uses meta-annotations, not bespoke context config.
- [ ] Would survive an internal refactor unchanged.
- [ ] No sleeps, no order dependence, no static mutable state.
- [ ] Failure output is diagnostic (AssertJ rich assertions, not `assertTrue`).

---

## 6. What Bad Looks Like (reject on sight)

### 6.1 Anti-patterns and required fixes

| Anti-pattern | Why it's harmful | Required fix |
|---|---|---|
| `@Mock`/`@MockBean` on own repository/service | Test mirrors implementation; breaks on refactor; verifies nothing | Use slice or integration test with real collaborators |
| `verify(service).doThing()` as the main assertion | Tests the call graph, not the behavior | Assert on output/state |
| H2 standing in for Postgres | Dialect differences hide real bugs | Testcontainers with prod engine |
| `@SpringBootTest` for a pure logic test | 100x slower than needed; context bloat | Plain JUnit unit test |
| Unique context config per test class | Destroys context caching; build minutes explode | Meta-annotations only |
| `Thread.sleep` for async | Flaky and slow simultaneously | Awaitility |
| `@Disabled` without linked ticket | Rot; silent coverage loss | Fix or delete; quarantine label + ticket if genuinely blocked |
| Asserting entire JSON payloads for one field | Brittle; noise on unrelated changes | Assert the specific field(s) under test |
| Shared fixtures mutated across tests | Order dependence | Fresh data per test; builders |
| Chasing line coverage on trivial code | False confidence | Mutation testing on critical modules (§7) |

### 6.2 Smells that warrant a closer look

- A test file significantly longer than the class it tests → probably testing implementation detail.
- Setup blocks over ~10 lines → missing builders, or the unit under test does too much.
- Many tests changed in a pure-refactor PR → tests were coupled to internals.

### 6.3 The mocking exception (narrow)

Test doubles for **owned** code are allowed only at deliberately designed *ports* (hexagonal boundaries) when testing a layer in isolation — e.g., `@MockitoBean TransferUseCase` in a `@WebMvcTest`, because the slice's job is HTTP concerns only, and the use case has its own integration tests. The rule of thumb: mock the port, never the adapter, never a peer.

---

## 7. Quality Gates & CI (Phase 3)

1. **Split suites:**
   - `test` task: unit + slice tests. Target: **< 30s** locally.
   - `integrationTest` task (classes matching `*IT`): Testcontainers suite. Target: **< 10 min** in CI.
2. **Mutation testing (PIT)** on domain/critical packages only. Gate: mutation score ≥ 75% on those packages. Do NOT run PIT repo-wide.
3. **Line coverage** as a floor, not a target: fail below 60% overall, but never write tests solely to raise this number.
4. **Flake policy:** a test that fails then passes on retry is logged. Two flakes in 7 days → auto-quarantine (excluded tag + ticket). Quarantined > 14 days → deleted.
5. **Container reuse** locally (`withReuse(true)`); fresh containers in CI.
6. **PR gate order:** compile → unit/slice → integration → mutation (critical modules) → merge.

---

## 8. Application Plan (how to roll this onto an existing project)

Execute in this order; each phase leaves the repo better even if you stop there.

**Phase 1 — Foundations (1–2 days)**
1. Add dependencies per §3.1; remove H2 from test scope.
2. Create `support/` package: meta-annotations, `TestcontainersConfiguration`, first 2–3 builders.
3. Split `test` vs `integrationTest` Gradle tasks.

**Phase 2 — Golden paths (2–3 days)**
4. Write one exemplary test of each type (§4) against real project code. These are the copy-me references.
5. Migrate the 3–5 most business-critical flows to integration tests.

**Phase 3 — Gates (1 day)**
6. Wire CI per §7. Set PIT on the domain module only.
7. Add the §5 checklist to the PR template.

**Phase 4 — Debt reduction (ongoing, boy-scout rule)**
8. When touching a class with mock-heavy tests: replace them with behavior tests at the appropriate layer, then delete the old ones. Never "fix" a mock-based test by updating its stubs.
9. Track: context-load count per CI run (should trend to a handful), suite duration, mutation score, flake count.

**Definition of done for adoption:** new PRs pass the §5 checklist without reviewer prompting; integration suite is the default habitat for new tests touching infrastructure; build times are stable or falling.

---

## 9. Instructions for an AI Assistant Applying This Playbook

When asked to add or improve tests in a project governed by this document:

1. **Classify the behavior** under test using §2's decision rule before writing anything.
2. **Reuse** the meta-annotations and builders in `support/`; extend them rather than bypassing them. If they don't exist yet, create them first (Phase 1) and say so.
3. **Copy the matching template** from §4 and adapt it.
4. **Self-review** against §5 and §6 before presenting the test. If any §6.1 row applies, rewrite — don't ship with a caveat.
5. When you encounter an existing bad test in a file you're editing, propose the §6.1 "required fix" alongside your change.
6. Never introduce Mockito, H2, `Thread.sleep`, or a new `@SpringBootTest` configuration without citing which exception in this document permits it.
7. If the production code cannot be tested without mocking owned classes, stop and propose the structural refactor (usually: extract pure domain logic, or introduce a port) instead of writing the mock.
