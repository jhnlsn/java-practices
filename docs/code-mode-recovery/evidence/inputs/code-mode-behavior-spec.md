# Code Mode: behavior spec for a custom agent

A language-agnostic description of how Claude Code's experimental Code Mode (v2.1.329) behaves, written so you can design your own equivalent. It is a behavior spec in my own words, not source or a copy of the prompts. Wording of the model-facing prompt is yours to write.

Evidence tags used below:
- **[D]** the captured tool definition (exact request sent to the model)
- **[DOC]** the public Code Mode docs
- **[BIN]** string literals and comments in the shipped binary (inferred; internals may differ)
- **[INF]** my inference, not directly observed

Numbers marked "unknown" were interpolated at runtime and I never saw them.

---

## 1. Core idea

Instead of exposing N separate tools (read, edit, shell, search, ...) that the model calls one at a time with a model round trip each, expose **one execution tool** that runs a script. The script calls your agent's tools as ordinary async functions. The model gets back only what the script chooses to return.

Why: each model turn re-reads the whole conversation, so turns are expensive while work inside a script is cheap. Scripts let the model loop, branch, run things concurrently, and filter output before it enters context. **[D]**

## 2. Model-facing surface

**Two tools only** (plus an optional "advisor" server-side tool, ignorable): **[D]**

1. `REPL` (execution tool). Input: `code` (string, required), `description` (string, short human-readable summary, used for approval UI), `timeout` (number ms, optional; default 30000, max 600000; time spent awaiting tool calls does not count toward it).
2. `Poll` (no input). Returns queued events, oldest first, or waits for one: a script finishing, a user message, a notification. A user message ends the wait. It also ends shortly before the prompt cache would expire. Result `(no pending events)` means only that nothing was delivered by this call.

**All other tools are removed from the model's tool list** and reached through the script. A few are listed with full typings in the REPL tool's description; the rest are discoverable at runtime (see 4.8). **[D]**

**System prompt changes are minimal.** The steering lives in the execution tool's description. Other system text just adjusts instructions that reference tools (e.g. "write memory files with the script's `write` function"; "invoke skills via the tools registry from a script"). **[D]**

## 3. Execution context

- **One persistent context per session.** Variables and functions survive across calls. Top-level `await` works. **[D]**
- **Sealed.** No `import`, `require`, `process`, or ambient filesystem/network. The only way out is the provided globals. **[D]**
- **Language is fixed (JavaScript), regardless of the project's language.** The model runs the project's own tools (pytest, cargo, ...) through the shell global. **[D]** For your agent: pick a scripting language your model writes well. JavaScript worked here because models are heavily trained on it; Python or Lua are viable if you embed that runtime and your model is comfortable in it. **[INF]**
- **Persistence limits.** Variables do not survive a process restart, session resume, fork or wake. The first result after such an event must say so. **[D]**
- **Session start.** Same permission mode as normal mode. Sessions can be resumed only with Code Mode on. **[DOC]**

## 4. Global API available inside scripts

### 4.1 Shell: tagged-template runner (`$`)
- Takes a template string (or a plain command string plus optional timeout). **[D]**
- **Interpolation quoting:** each interpolated value is automatically single-quoted as one argument; arrays expand to one argument per item; a `raw` wrapper splices unquoted text. Backslash-escaped backtick and `${` are passed to the shell literally. The doc warns that wrapping an interpolation in your own quotes defeats the auto-quoting and re-opens injection. **[D]**
- **Result object:** `stdout` (stderr merged into it), `stderr` (only the runner's own notices), `exitCode` (null while still running in background), `text()`, `lines()`, `json()`, `output` (display text with `[stderr]`, `[error]`, `[exit N]` appended when present), `truncated`, `whole`, optional `file`, `bytes`, `running {taskId, outputPath}`, `error`, `note`, and a `withheld` flag when a post-hook rewrote saved output. **[D]**
- **Chainable modifiers:** `.nothrow()`, `.throws(bool)`, `.quiet()`, `.timeout(ms)`, `.cwd(dir)`, `.env(map)`, plus `.text()`, `.lines()`, `.json()` shortcuts when called immediately. **[D]**
- **Non-zero exit throws** a typed error carrying stdout/stderr/exitCode/truncated/running, unless `.nothrow()`. **[D]**
- **Exit-1 special cases (not errors):** exit code 1 from grep/rg/egrep/fgrep, find, diff, `test`/`[`, `git diff`, `git grep` is treated as an outcome (no match, files differ, false test). `exitCode` is 1 and `note` explains. **[D]**
- **Large output:** output of a successful command is kept whole; if big, the first 64 MiB is spilled to a file whose path is returned and `truncated` marks that `stdout` holds only the start. Failing commands' output has no file and may come back with the middle cut out; `truncated` is true and a line on the call's stderr says what is missing. **[D]**
- **Timeouts:** default await limit 600000 ms; an explicit timeout may be up to 7200000 ms. **On timeout the command moves to the background**: the await resolves without throwing, `exitCode` is null, `running` names the task and the output file, and the script continues. Exception: a command starting with `sleep` is stopped instead. Callers must check `running` before trusting output. **[D]**
- **Do not use `nohup`/`setsid`/`&`** to daemonize: the harness cannot show or stop what they start. Use a short `.timeout()` to push a server to background where the user can see and stop it. **[D]**
- **Sandbox applies** to these shell commands (the script itself and its file/web/MCP calls run outside the sandbox). A strict-sandbox mode refuses unsandboxed retries. **[DOC]**
- Also seen: a note when a shell call was blocked in the sandbox and re-run outside it, and a report when a hook restarted a call. **[BIN]**

### 4.2 `edit(path, old, new, opts?)` / `edit(path, [[old,new],...], opts?)`
- Exact-string replacement, inserted literally (explicitly not regex-replacement semantics, so `$&` etc. have no special meaning). **[D]**
- **Throws on zero or multiple matches.** `{all:true}` replaces every match. `{soft:true}` resolves `{ok:false, error}` instead of throwing. Resolves `{ok, replacements, error?}`. **[D]**
- **Batch form is validated up front:** every anchor is checked in order before anything is written, so a missing or ambiguous anchor leaves the file untouched. A failure after validation (e.g. a permission denial) leaves earlier edits applied. **[D]**

### 4.3 `write(path, content)`
Writes the whole file, creating directories; resolves byte count. **[D]**

### 4.4 `file(path)`
Lazy reader: `name`, `text()`, `json()`, `lines()`, `exists()`, `slice(offset?, limit?)` (1-based line offset). Relative paths resolve from the working directory. Text reads return content with no line numbers, up to 256 MiB unless offset/limit is given. **[D][BIN]**

### 4.5 Output helpers
- `log(...)` / `self.log(...)`: lines delivered with the result. **[D]**
- `preview(value, n=200)`: first n chars with a cut marker; for a shell result that spilled to a file, prefixed with size and path. **[D]**
- `console.*`: goes to a bounded in-memory ring, **not** into the model's context; `console.tail(n)`, `console.buffer()`, `console.dropped()` read it back. **[D]**
- `atob`, `btoa`, `sleep(ms)`, timers (`setTimeout`/`setInterval` and clear variants). **Timers are cleared when the script that set them ends.** **[D]**

### 4.6 Introspection and control
- `running()`: list scripts still holding work (id, short snippet, ageMs, state in {waiting, running, detached, late}, settled, self, `abort()`). `abort()` stops a script and kills its shell commands, except commands already moved to background. **[D]**
- `self` aliases the global object. **[D]**

### 4.7 Tool registry
- `tools.<Name>(input)` calls any session tool; built-in tools also exist as bare globals. `tools.list()` returns available names. In a subagent, a tool the agent isn't given is absent from the list and throws when called. **[D]**
- **Error contract:** built-in tool failures resolve `{error}`; MCP tool failures **throw** (message carries the tool error, a `detail` field the parsed body if it was JSON). **[D]**
- MCP tools are callable by full name (as `tools["name"]` when the name contains `-`). **[D][BIN]**

### 4.8 Discovery
- `searchTools(query, max?)` finds tools by words in name/description; returns `{name, about, input}` where `input` is the parameter shape written as a type. Empty query returns `{error}`. **[D]**
- `describeTool(name)` returns description plus full JSON schema, or `{error}`. **[D]**
- The description embeds typings for the most-used tools and a list of the rest by name only; the full typings are generated per session and include MCP tools. **[D][BIN]**

## 5. Output contract (what the model sees after a script)

1. **Result = value of the last expression, plus everything logged.** **[D]**
2. **Returned values stay in the persistent context whether or not returned**, so the model is told to return what it wants to read now and keep the rest in variables to slice later. **[D]**
3. **Promises inside a returned object are awaited automatically** (so `({a: $\`x\`, b: $\`y\`})` needs no awaits); promises used inline (concatenation, interpolation, as arguments) still need `await`. **[D]**
4. **Per-part truncation:** each key of a returned object and the log output are cut to about 30,000 characters, keeping head and tail with a marker in the middle. **[D]**
5. **Display escaping:** `&`, `<`, `>` appear to the model as HTML entities in results, logs and errors; actual values and files are unchanged. The prompt tells the model to write plain characters in code. **[D]**
6. **Side-channel notes** appended to the tool result: dropped images over a per-result cap, PDF pages that couldn't be processed, a cap on document count, refused-call reports, "left running" reports, tools-used lines. **[BIN]**
7. **Provenance markers** (what a script and earlier scripts whose variables it read obtained from its tool calls) are prepended to output. Purpose not stated; looks like tracking where data came from across persistent variables. **[BIN][INF]**

## 6. Concurrency and the async lane

- **Single VM, FIFO start.** A script starts when the previous one ends **or has run about 30 s**; a still-running script is then `detached`, keeps running beside later scripts, and they share variables. **[D]**
- **Dispatch receipts:** a call may return only `(dispatched #N)` immediately. That means queued or running; resending would run it twice. The result arrives later as an event. **[D]**
- **If a call instead returns the script's output directly** (the permission-asking modes), calls run until their script ends, so everything started must be awaited or it may not complete. **[D]**
- **Event delivery:** after the model's tool calls, if a script is still running, the harness waits until it ends or something else arrives (e.g. a user message), batches anything that arrives close together, and returns it via `Poll` in arrival order. Event kinds: `repl-eval` (with `eval` number, log lines, result or error) and `repl-status` (names scripts still running). A user message follows tool results as the user's text. The model need not call Poll after an exec call. **[D]**
- **Late output** (logged after a script ended) arrives the same way, under the script's number, batched and run through post-tool hooks first. **[D][BIN]**
- **Waiting inside a script is free;** any message addressed to the model ends the wait within seconds. Guidance: put all possible work in one script, including awaiting builds/tests and branching on exit code. **[D]**
- **Long-running work:** in modes that ask for permission, the script is stopped 600000 ms after it starts, not counting time at permission prompts. Background code (non-waiting) can run up to 2 hours and requires auto or bypass mode. **[D][DOC]**
- **Stop paths:** user Esc, a No on a permission prompt (with/without a comment: stops script vs refuses only that call), task-stop, or the harness. Calls left running are enumerated with "may have run in part or in full; check before repeating." Background MCP calls are reported separately. **[DOC][BIN]**
- **Transcript recovery:** a transcript ending on an early-return receipt is treated as a finished turn on resume. **[BIN]**

## 7. Resource limits and isolation

All enforced by the host, with checks the script cannot reach or tamper with. **[BIN]**

- **Step budget.** A "step" is one loop pass or one function call. Counters are inserted by rewriting the script before it runs (see 8); budget is handed out in strides and the clock is read only at stride boundaries. Exceeding it stops the script with a message telling the model to end the loop or await a tool call or timer. Numeric budget: unknown.
- **Per-turn wall clock.** A "turn" is the synchronous code that runs from script start, a tool result, or a timer firing until the next tool result or timer. Catches slow built-in calls (e.g. a regex over huge input). Limit: unknown.
- **Memory cap**, checked periodically via a host callback. Message tells the model to null out large variables and push heavy data work into shell commands. Limit: unknown.
- **Whole-script wall clock** (per the `timeout` input), not counting time at permission prompts, plus a separate hard limit. **[D][BIN]**
- **Leftover code** (from detached or ended scripts) gets a shorter clock. **[BIN]**
- **Unhandled rejections** from stopped code are swallowed so the host never crashes. **[BIN]**
- **Call caps:** a cap on the number of tool calls per script; calls beyond it are not made. Value: unknown. **[BIN]**
- **Context reset:** if a script alters the global object in a way that prevents new scripts from starting, the context is discarded; the next call reports that earlier variables are gone. **[BIN]**

## 8. Sandbox hardening (design pattern, not code)

Observed measures: **[BIN]**
- Run scripts in an isolated VM context, and **refuse to start if the runtime cannot reliably identify that context's global object** (otherwise sandbox checks could be bypassed). An engine self-check runs at startup.
- Remove escape-hatch globals: weak references, finalization registry, shared memory/atomics, nested-realm facilities, WebAssembly, and engine debug/shell globals. One comment notes a debug global is "a full escape."
- Freeze built-ins; convert common data properties to accessors so frozen built-ins don't break ordinary subclassing (the "override mistake").
- Capture needed built-ins before any script runs, so a script replacing a global can't redirect the host's helpers.
- Pass values across the boundary through sanitizers (primitivize, JSON round trip, null-prototype objects); reject non-serializable inputs (BigInt, cycles, too deep or too large) with specific messages.
- Rewrite source before execution to insert step counters and markers around template literals, then hide the rewriting if a script prints a function's source.
- Host-supplied checks and stop markers are held in closures unreachable from script code; comments cite internal security review.

For your agent, an out-of-process interpreter with OS-level limits (seccomp/sandbox, cgroups/ulimit, no network or filesystem except via an RPC bridge back to your tool layer) is a simpler way to reach the same guarantees than in-process hardening. **[INF]**

## 9. Parse-time and run-time guards (model-facing errors)

The host checks a script before running it and, on failure, says nothing ran. Observed rules: **[BIN]**
- Script that fails to parse: "did not run; nothing executed."
- Helpful hints for common mistakes: triple-quoted strings don't exist (use template literals or `\n`); use the tool globals instead of invented APIs.
- **Refuses scripts that would overwrite a built-in helper, tool, or JS built-in** by top-level declaration or undeclared assignment (it would silently change them for every later script).
- Detects a promise used without `await` and names it.
- Unawaited tool calls still running at script end are reported by name ("don't repeat these; add `await` next time"); calls that hadn't started are listed as not run; failures after script end are listed.
- Pending timers/sleeps at script end are cancelled with a note.
- A variable declared by an earlier script that ended before assigning it is flagged when read.

## 10. Permissions and safety integration

- **Each inner call goes through the normal permission pipeline** under the tool's usual name: deny/ask rules, pre-tool hooks, prompts per current mode. **[DOC]**
- **Modes:** auto and bypass run scripts without prompts (except actions no mode auto-approves); other modes prompt per inner call that would prompt normally. **[DOC]**
- **Auto-mode classifier reviews the whole script once before it runs,** not each call, and cannot see run-time-computed values. Specific refusals, each phrased "not a judgment the code is unsafe": **[BIN]**
  - script containing `\uXXXX` escapes (cannot be reliably checked; model told to use `\xNN` or `\u{...}` forms)
  - script whose call a hook changed from what the model wrote (also if a hook changed an earlier call in the same response); the model may resend once in a response with no other tool calls
  - reads and searches are judged as part of the call that makes them
- **Approval card summary is the model-supplied `description`;** the docs warn nothing checks it against the code. **[BIN]**
- **Refused inner calls** are collected and reported back, in a separate section of the result for scripts that did not throw. **[BIN]**
- **A hook that matches the exec tool can read `tool_input.code`** (pre) and read/redact `tool_response` (post: fields `code`, `result`, `stdout`, `stderr`, `toolsUsed`, optional `error`, `images`, `documents`). Malformed rewrites are ignored and the original is used. Hooks with failures or timeouts refuse calls from code. **[DOC]**
- **Known gap to design around:** because auto review is per script, keep deny/ask rules and hooks for any call you must control. **[DOC]**

## 11. Prompt design (what the exec tool's description teaches the model)

Summarized in my words; write your own wording for your model. **[D]**

1. State plainly which tools exist and that everything else happens through the script globals.
2. Explain the context is persistent and sealed; the language is fixed; no imports.
3. **Teach the cost model:** every exec call is a full model round trip; work inside a script is nearly free and parallelizable. So gather everything a decision might need, then come back only when the next step depends on a result.
4. Teach output discipline: return what you want to read now, keep the rest in variables, use `preview`, the ~30k-char per-part cut, entity escaping, auto-await in returned objects.
5. Explain the async lane: receipts, detached scripts, what "dispatched" means, that Poll is optional, that waiting inside a script is free.
6. Explain shell semantics (quoting, exit-1 cases, spill files, background-on-timeout) and what not to do (daemonizing tricks).
7. Show one multi-step example: parallel searches, a guard that aborts if nothing matches, an edit, then run tests with `nothrow` and return a compact object.
8. Include per-session typings for the commonly used tools; list the rest by name and point to the discovery functions.
9. Keep a git/etiquette block unchanged, and rewrite other system lines that name old tools.

Total description is large (about 29,500 characters, roughly 7k tokens est.) and resident every turn. Consider a smaller version for your agent. **[D]**

## 12. Implementation checklist for your agent

**Must have**
- [ ] One exec tool + a poll/wait tool; remove direct tools from the model's list.
- [ ] Persistent sandboxed interpreter with top-level await and a tool bridge (RPC back to your tool layer).
- [ ] Shell runner with auto-quoting, nothrow/timeout/cwd/env, spill-to-file, exit-1 special cases, background-on-timeout.
- [ ] `edit` with atomic batch validation; `write`; `file().slice`.
- [ ] Output contract: last-expression value, log, per-part truncation, auto-await in returned objects, display escaping.
- [ ] Step/wall-clock/memory limits enforced by the host; context reset on corruption.
- [ ] Per-inner-call permission pipeline (rules + hooks) with refused calls reported.
- [ ] Parse-before-run with guard errors (shadowing built-ins, unawaited promises, bad syntax).

**Should have**
- [ ] Async lane: dispatch receipts, detached scripts after ~30 s, events delivered via poll, late output batching.
- [ ] `searchTools` / `describeTool` / `tools.list()` and MCP tools by name.
- [ ] `running()` with `abort()`; timers cleared at script end; console ring buffer.
- [ ] Hooks on the exec tool (input code, output redaction).
- [ ] Restart/resume/fork notice that variables are gone.

**Nice to have**
- [ ] Provenance markers on data from tool calls; tools-used tracking for lazy prompt typings; image/PDF caps.

## 13. Acceptance tests to write

1. Variable defined in call 1 is readable in call 2; after a simulated restart the first result reports it is gone.
2. A script returning `({a: promiseA, b: promiseB})` yields resolved values; a script that concatenates an un-awaited promise is flagged.
3. `$` with a value containing spaces, quotes, `;`, `$(...)` passes it as one literal argument; `raw` splices unquoted.
4. grep with no matches returns exit 1 without throwing; an unrelated command exiting 1 does throw.
5. A command exceeding its timeout returns `running` with an output path and does not throw.
6. Output over the cap spills to a file; `truncated` and file path are set.
7. `edit` batch with one missing anchor writes nothing; with `{soft:true}` returns `ok:false`.
8. A loop with no await trips the step budget and the message tells the model what to do; a huge regex trips the wall clock; a big allocation trips memory.
9. A script that reassigns a built-in helper is rejected before running.
10. A denied inner call is reported in the result and the script continues; a "No" on a prompt stops the script and lists which calls finished, failed, were declined, or are still running.
11. A detached script and a later script share variables; `running()` shows both; `abort()` stops one.
12. A post-hook that rewrites output with a malformed shape is ignored.
13. A script containing a Unicode escape is refused by the auto-mode gate with the instructive message.

## 14. Unknowns (verify or decide for yourself)

- Exact numbers for step budget, per-turn wall clock, memory cap, per-script tool-call cap, and the leftover-code clock.
- Purpose of the "raw mark" instrumentation on template literals and of provenance markers (inferred, not observed).
- How the tool-list is made lazy and when `tools-used` entries are emitted.
- Whether `$.model.classify`, a helper seen in a nearby bundle chunk, is part of Code Mode.
- Real-world benefit: I only tested a one-word prompt with no tool use, so token/time savings are unmeasured.
