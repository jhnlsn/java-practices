# Java Testing Playbook (Spring Boot 3.x, Java 21+)

> **How to use this document:** This is an executable playbook. When applying it to a project, follow the phases in order. Every rule is written as a directive so an AI assistant or engineer can act on it without interpretation. Code templates are canonical — copy them, don't reinvent them.
>
> **Canonical code:** every template here exists as real, running code in [`examples/transfers`](../examples/transfers); where a snippet and the code differ, the code wins. **Scope:** this playbook inherits the development playbook's §0 scope — including its plain-CRUD shortcut and its escape valve: disproportionate ceremony is surfaced to a human, never silently obeyed or silently ignored.

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

Canonical file: [`transfers/build.gradle.kts`](../examples/transfers/build.gradle.kts) (version catalog: [`gradle/libs.versions.toml`](../examples/gradle/libs.versions.toml))

```kotlin
// build.gradle.kts (test dependencies)
dependencies {
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.boot:spring-boot-testcontainers")
    testImplementation("org.testcontainers:junit-jupiter")
    testImplementation("org.testcontainers:postgresql")   // match real infra; NEVER H2
    testImplementation("org.awaitility:awaitility")
    testImplementation("org.wiremock:wiremock-standalone") // doubles for external HTTP only
    testImplementation("org.assertj:assertj-core")
    testImplementation("com.tngtech.archunit:archunit-junit5") // enforces §6.3 and dev playbook §7
}
```

Rules:
- The test database MUST be the same engine and major version as production. **H2 is banned** by default. *Narrow waiver (adversarial review §2):* a module with zero native SQL and no locking semantics may run slices on an embedded database under CI-budget pressure — but it keeps at least one Testcontainers smoke test of schema + migrations, and the waiver is recorded in the module's build file.
- Mockito ships with `spring-boot-starter-test` and stays on the classpath. **What may be mocked is governed by an ArchUnit rule**, not a dependency exclusion (adversarial review §6): [`MockUsageTest`](../examples/transfers/src/test/java/com/example/transfers/architecture/MockUsageTest.java) fails the build on any `@MockitoBean`/`@Mock` field whose type is not a domain port or use case (§6.3).

### 3.2 Meta-annotations (create these before writing any test)

Create one meta-annotation per test type so context configuration is centralized and Spring's context cache actually works. Canonical files: [`support/IntegrationTest.java`](../examples/transfers/src/test/java/com/example/transfers/support/IntegrationTest.java), [`support/TestcontainersConfiguration.java`](../examples/transfers/src/test/java/com/example/transfers/support/TestcontainersConfiguration.java).

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

Every core domain entity gets a builder in `src/test/java/.../support/`. A test must only state the fields it cares about. Canonical files: [`support/AccountBuilder.java`](../examples/transfers/src/test/java/com/example/transfers/support/AccountBuilder.java), [`support/Monies.java`](../examples/transfers/src/test/java/com/example/transfers/support/Monies.java).

```java
public class AccountBuilder {
    private AccountId id = new AccountId("ACC-1");
    private AccountStatus status = AccountStatus.ACTIVE;
    private Money balance = Monies.usd(100);

    public static AccountBuilder anAccount() { return new AccountBuilder(); }
    public AccountBuilder withId(String id) { this.id = new AccountId(id); return this; }
    public AccountBuilder withBalance(Money balance) { this.balance = balance; return this; }
    public AccountBuilder suspended() { this.status = AccountStatus.SUSPENDED; return this; }
    public Account build() { return new Account(id, status, balance); }
}
```

Currency-defaulting fixtures (`Monies.usd(50)`) live in test scope on purpose: production `Money` has no ambient-default factory, so the convenience can never leak into domain code.

---

## 4. Canonical Templates (Phase 2 — golden paths to copy)

### 4.1 Domain unit test (no Spring)

Canonical file: [`domain/TransferPolicyTest.java`](../examples/transfers/src/test/java/com/example/transfers/domain/TransferPolicyTest.java)

```java
class TransferPolicyTest {

    private final TransferPolicy policy = new TransferPolicy();

    @Test
    void rejectsTransferWhenBalanceInsufficient() {
        var account = anAccount().withBalance(usd(50)).build();

        var result = policy.evaluate(account, usd(100));

        assertThat(result).isEqualTo(new TransferDecision.Rejected(RejectionReason.INSUFFICIENT_FUNDS));
    }
}
```

Construct expected values directly with `new`, never via the same factories the production code calls — factory-to-factory comparison lets a broken factory pass its own test. (A surviving PIT mutant in this repo found exactly that; the fix is recorded in the canonical file's javadoc.)

### 4.2 Web slice test

Canonical file: [`adapter/web/TransferControllerTest.java`](../examples/transfers/src/test/java/com/example/transfers/adapter/web/TransferControllerTest.java)

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
                        {"from":"A","to":"B","amount":-10,"currency":"USD"}
                        """))
           .andExpect(status().isUnprocessableEntity());
    }
}
```

### 4.3 Integration test (the workhorse)

Canonical file: [`TransferFlowIT.java`](../examples/transfers/src/test/java/com/example/transfers/TransferFlowIT.java)

```java
@IntegrationTest
class TransferFlowIT {

    @Autowired TestRestTemplate http;
    @Autowired Accounts accounts;      // the domain port — seeding speaks domain language
    @Autowired JdbcTemplate jdbc;

    @BeforeEach
    void cleanSlate() {                // shared cached context ⇒ every test cleans its data (§6.3)
        jdbc.update("delete from ledger_entries");
        jdbc.update("delete from accounts");
    }

    @Test
    void completedTransferMovesFundsAndRecordsLedgerEntry() {
        accounts.save(anAccount().withId("A").withBalance(usd(100)).build());
        accounts.save(anAccount().withId("B").withBalance(usd(0)).build());

        var response = postTransfer("""
                {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                """);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(accounts.byId(new AccountId("A")).orElseThrow().balance()).isEqualTo(usd(60));
        assertThat(accounts.byId(new AccountId("B")).orElseThrow().balance()).isEqualTo(usd(40));

        // §4.5 — the ledger write is async; await it, never sleep for it.
        await().atMost(Duration.ofSeconds(5)).untilAsserted(() ->
                assertThat(jdbc.queryForObject(
                        "select count(*) from ledger_entries where from_account = 'A'", Long.class))
                        .isEqualTo(1L));
    }
}
```

Note it posts raw JSON: wire DTOs are adapter-private (dev playbook §2.2), so the test exercises the literal wire contract instead of importing the adapter's types.

### 4.4 External API double (WireMock)

Canonical file: [`adapter/fx/FxRateClientIT.java`](../examples/transfers/src/test/java/com/example/transfers/adapter/fx/FxRateClientIT.java)

```java
@IntegrationTest
class FxRateClientIT {

    @RegisterExtension
    static WireMockExtension fxApi = WireMockExtension.newInstance()
            .options(wireMockConfig().dynamicPort()).build();

    @DynamicPropertySource
    static void fxProperties(DynamicPropertyRegistry registry) {
        registry.add("fx.base-url", fxApi::baseUrl);
        registry.add("fx.read-timeout", () -> "1s");
    }

    @Autowired FxRates fxRates;   // test through the port; the real adapter runs underneath

    @Test
    void translatesProviderTimeoutIntoThePortsFailureMode() {
        fxApi.stubFor(get(urlPathEqualTo("/rates/USD/EUR"))
                .willReturn(okJson("""
                        {"base":"USD","quote":"EUR","rate":0.9143}
                        """).withFixedDelay(3_000)));

        assertThatThrownBy(() -> fxRates.rateFor(new CurrencyPair(USD, EUR)))
                .isInstanceOf(FxUnavailable.class);
    }
}
```

### 4.5 Async assertions

```java
await().atMost(Duration.ofSeconds(5))
       .untilAsserted(() -> assertThat(outbox.pendingEvents()).isEmpty());
```

`Thread.sleep` in a test is a build-breaking offense. Real usage: the ledger assertion in [`TransferFlowIT.java`](../examples/transfers/src/test/java/com/example/transfers/TransferFlowIT.java); the bad/good pair: [`antipatterns/testing/sleepyasync`](../examples/antipatterns/src/main/java/com/example/antipatterns/testing/sleepyasync).

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

Test doubles for **owned** code are allowed only at deliberately designed *ports*: types in `domain.port`, and use cases (the driving ports) when slicing the web layer — e.g., `@MockitoBean TransferUseCase` in a `@WebMvcTest`, because the slice's job is HTTP concerns only and the use case has its own integration tests. The rule of thumb: mock the port, never the adapter, never a peer. This is machine-enforced: [`MockUsageTest`](../examples/transfers/src/test/java/com/example/transfers/architecture/MockUsageTest.java) fails the build on a double of any other type.

Two companion rules (adversarial review §9):

- **No `@MockitoBean` inside `@IntegrationTest` classes.** It silently forks a new application context, defeating the cache §3.2 exists to protect — and it violates this section anyway.
- **Every integration test cleans its data** (transaction rollback or delete-before, as in `TransferFlowIT`'s `@BeforeEach`): with a shared cached context, leftover rows become some other test's flaky failure.

**Legacy carve-out (adversarial review §1):** on legacy code that cannot be restructured yet, a mock-based *characterization* test is better than no test. Mark it as such, link the structural debt, and when §8 Phase 4 touches that code, replace the test — never extend it.

---

## 7. Quality Gates & CI (Phase 3)

1. **Split suites:**
   - `test` task: unit + slice tests. Target: **< 30s** locally.
   - `integrationTest` task (classes matching `*IT`): Testcontainers suite. Target: **< 10 min** in CI.
2. **Mutation testing (PIT)** on domain/critical packages only, **as a reported trend — not a blocking PR gate** (adversarial review §7): a non-blocking CI job runs `pitest` and uploads the report; 75% remains the attention threshold on those packages, but a breach triggers review of the trend, not a failed build. Do NOT run PIT repo-wide. Canonical config: the `pitest` block in [`transfers/build.gradle.kts`](../examples/transfers/build.gradle.kts); CI job: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml).
3. **Line coverage** as a floor, not a target: fail below 60% overall, but never write tests solely to raise this number.
4. **Flake policy:** a test that fails then passes on retry is logged. Two flakes in 7 days → auto-quarantine (excluded tag + ticket **with an owner**). **Deletion is a human decision, never automatic** (adversarial review §8): the decision records whether the flake was a test defect or an accepted risk — and a flake in concurrency-adjacent code is triaged first as a potential production bug, because flakiness is frequently a real race wearing a test costume.
5. **Container reuse** locally (`withReuse(true)`); fresh containers in CI.
6. **PR gate order:** compile → unit/slice (including ArchUnit) → integration → merge; mutation runs alongside as the non-blocking trend.

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
6. Never introduce H2, `Thread.sleep`, or a new `@SpringBootTest` configuration without citing which exception in this document permits it; never write a double that `MockUsageTest` would reject — if the rule blocks you, the structure is the problem (see item 7).
7. If the production code cannot be tested without mocking owned classes, stop and propose the structural refactor (usually: extract pure domain logic, or introduce a port) instead of writing the mock.
8. **Escape valve:** if a rule demands obviously disproportionate ceremony for the code at hand (e.g., a container suite for a log formatter), stop and surface the conflict to a human — never silently comply, never silently deviate.
