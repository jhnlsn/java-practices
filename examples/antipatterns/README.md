# Anti-Pattern Gallery

The "What Bad Looks Like" tables from both playbooks, as compiling code. Every
`bad` package is a specimen: it compiles on every build (so it can never rot
into fiction) but nothing here ever runs — bad *test* examples deliberately
live in the main source set so no runner picks them up. Each bad file's
javadoc names the playbook row it violates and points at its `good`
counterpart; the runnable versions of the good patterns live in
[`../transfers`](../transfers).

Reading one pair takes about two minutes: read `bad` first, believe it (each
is written the way it actually appears in real codebases), then read `good`
and the javadoc explaining what the restructuring buys.

## Development playbook §6 — production code

| Playbook row | Exhibit |
|---|---|
| `@Service` with business logic + repository calls interleaved | [`fatservice`](src/main/java/com/example/antipatterns/fatservice) |
| Anemic domain + fat service | [`fatservice`](src/main/java/com/example/antipatterns/fatservice) |
| JPA entity used as domain model | [`entityasmodel`](src/main/java/com/example/antipatterns/entityasmodel) |
| `LocalDateTime.now()` / `new Random()` inline | [`ambienttime`](src/main/java/com/example/antipatterns/ambienttime) (also the Sunday branch in `fatservice`) |
| Static utility with I/O | [`staticio`](src/main/java/com/example/antipatterns/staticio) |
| Business exceptions for expected outcomes | [`exceptionflow`](src/main/java/com/example/antipatterns/exceptionflow) |
| Setters on domain objects | `fatservice/bad/Customer`, `entityasmodel/bad/Order` |
| Controller calling repository directly | [`entityasmodel`](src/main/java/com/example/antipatterns/entityasmodel)`/bad/OrderController` |
| God use case (10+ dependencies) | [`godusecase`](src/main/java/com/example/antipatterns/godusecase) |
| Domain importing `@Component`, `@Entity`, `@JsonProperty` | `entityasmodel/bad/Order` — and the ArchUnit rule that makes it unmergeable: `transfers/.../architecture/ArchitectureTest` |

## Testing playbook §6.1 — tests

| Playbook row | Exhibit |
|---|---|
| `@Mock`/`@MockBean` on own repository/service | [`testing/mockedowned`](src/main/java/com/example/antipatterns/testing/mockedowned) — the bad test **passes against a service whose debit adds instead of subtracts** |
| `verify(service).doThing()` as the main assertion | `testing/mockedowned/bad/MockedTransferTest` |
| H2 standing in for Postgres | No bad code needed — it's a build decision. The good pattern: `transfers/.../support/TestcontainersConfiguration` (`postgres:16`, same engine as prod). |
| `@SpringBootTest` for a pure logic test | [`testing/contextzoo`](src/main/java/com/example/antipatterns/testing/contextzoo) |
| Unique context config per test class | `testing/contextzoo/bad` — the fix for tests that *do* need a context: `transfers/.../support/IntegrationTest` |
| `Thread.sleep` for async | [`testing/sleepyasync`](src/main/java/com/example/antipatterns/testing/sleepyasync) |
| `@Disabled` without linked ticket | `testing/brittle/bad/BrittleProfileTests` |
| Asserting entire JSON payloads for one field | `testing/brittle` |
| Shared fixtures mutated across tests | `testing/brittle` |
| Chasing line coverage on trivial code | No bad code needed — it's a metrics decision. The good pattern: PIT scoped to domain packages as a trend (`transfers/build.gradle.kts`), which finds assertion gaps that line coverage cannot. |
