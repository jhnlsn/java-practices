# Functionality coverage

The source archive is complete for the embedded module tables of both binaries. **This is not a claim that every feature has been exercised or that this directory is a standalone replacement for Claude Code.**

## Evidence levels

| Area | Recovered | Executed here | Remaining boundary |
|---|---|---|---|
| Embedded files and assets | All 7,433 entries | Every byte/hash/offset checked | Native executable itself remains original |
| Import/dependency completeness | Static and literal dynamic/file references | Zero missing embedded references | Computed external names depend on runtime |
| Generated shell helper | Both versions, decoded identically | Quoting with an actual POSIX shell; modifiers, output/error/full-reader paths, PowerShell rendering | Real host execution policy, spill creation, background/kill lifecycle |
| File helper | Both versions | Lazy reads, slice, JSON, write validation, literal edit, all/soft/no-op, ordered batch preflight | Real permission prompts and concurrent filesystem races |
| Timers/sleep | Helpers and host ownership code | Sleep cancellation callback | Full host timer/late-work lifecycle |
| Tool registry and running handles | Helpers and host bridges | Filtering, read-only proxy, frozen snapshots, abort | Real permissions, MCP endpoints, tool aliases and discovery sessions |
| Context API | Helpers, declarations and Agent bridge | Handles, live state, results/tail/release and fork guards with fixtures | Actual agents, prompts, policy and message delivery |
| 329 Acorn and AST instrumentation | Full shipped parser/walker/pass | Execution wrappers, loops, budget instrumentation, reserved names, global-write guards and nesting | Private Bun REPL transpilation |
| 330 replacement parser/pass | Full shipped parser/walker/pass | Await/destructuring/classes/regex, loops/async execution, new reserved name, syntax/nesting failures | Private Bun REPL transpilation |
| Step/resource guards | Full host and injected guards | Exact 329 guard code with reduced budget and supplied memory/clock signals; raw provenance validation | Native timeouts, real GC pressure, native realm recognition |
| Async scheduler | Both versions | Exact 330 scheduler: FIFO, detach, cap, queued abort, failed scripts, context release | Complete live Poll/transcript/resume/late-output transport |
| Output schema/rendering | Source and embedded declarations | Helper-level readers/preview tested | Full result rendering, nested promise resolution, hooks, image/PDF caps not integration-tested |
| Auto review / permissions / hooks | Client code and schemas | Source inspection | Remote classifier, actual rule decisions and hook sessions |
| Engine hardening / activation | Client checks and configuration | Source inspection | Private Bun engine behavior, account/model/admin feature gates |

## Tests

`npm test` executes **64 leaf tests** across both helper versions, both parser paths, the resource/provenance guards and the 330 scheduler. Node's report also counts six enclosing tests, yielding **70 passed, zero failed**. The saved [TAP output](evidence/tests.tap) is the exact run record.

Tests use the recovered functions and helper files rather than reimplementations of the feature. Host substitutions are explicit in the test support files. The scheduler module is loaded unchanged with synthetic imports for its external host services. Parser instrumentation probes begin at a generated-wrapper boundary because the system Bun does not supply the required private REPL transform.

## What full independent parity would still require

1. A compatible persistent runtime/transpiler, or a deliberately new implementation of persistent bindings, top-level await and final-expression return.
2. A real tool host with permission rules, hooks, cancellation, output storage, process ownership, MCP error contracts and discovery.
3. Native isolation/resource behavior equivalent to the shipped runtime, validated separately from these fixture tests.
4. End-to-end REPL/Poll event delivery, transcript recovery/rewind/resume, late output and live context lifecycle tests.
5. A policy/account/model integration or an explicit alternative behavior for gates that depend on Anthropic services.

The archive and coverage report make those dependencies reviewable. They do not silently substitute missing behavior with no-ops or present fixture success as full parity.
