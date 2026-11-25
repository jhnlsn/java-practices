# Claude Code Code Mode: surrounding code (not just a prompt)

Extracted on 2026-11-19 from the installed binary `/Users/jhnlsn/.local/bin/claude` (Claude Code v2.1.329) via `strings -n 40`. Companion file: `code-mode-prompt-extract.md` (the prompt text).

**Short answer:** Yes. Code Mode is a real runtime with substantial code around the prompt. The binary bundles minified JS, so function and variable names are mangled, and `strings` shows only fragments. Everything below is inferred from string literals, comments and error messages. I did not decompile or run any of it, so treat the architecture as informed inference, not a verified spec. Where a claim rests on a single string, I say so.

## 1. A sandboxed script VM

- Scripts run in a `node:vm` context (the bundle calls `createContext` and `runInContext`). The tool is called `REPL`.
- Bundled strings: "Refusing to make a node:vm context: this Bun cannot recognize a context's global, so sandbox checks could be bypassed. Run Claude Code's native build, whose runtime can." This matches the docs' native-build requirement. The code uses `Bun.ant?.isVmContextGlobal` (a Bun-internal check) to recognize the context's global.
- A related engine-check error: "The REPL tool cannot run scripts in this session: the JavaScript engine under Claude Code failed Code Mode's engine check. Run Claude Code with the repository's pinned Bun (node_modules/.bin/bun) or use a staff build." So there is an engine self-test at startup.
- The VM is persistent across calls ("one persistent VM"). If a script tampers with `globalThis` in a way that stops new calls from starting, the context is reset: "REPL context poisoned by non-configurable global; context reset" and "variables and functions from earlier calls are gone."

## 2. Hardening of the VM global (SES-style)

A setup script is injected into the context. From its source comments and code:
- Defines a non-writable `Error.prepareStackTrace` that only returns the stack string.
- Deletes dangerous globals: `ShadowRealm`, `WebAssembly`, `FinalizationRegistry`, `WeakRef`, `Atomics`, `SharedArrayBuffer`, plus JavaScriptCore debug/shell globals (`$vm`, `gc`, `edenGC`, `fullGC`, `print`, `readFile`, ...). The comment says `$vm` "is a full escape (createGlobalObject, addressOf, runScript)."
- Applies an "SES-style enable-property-override" fix: shadowed data properties become accessors so frozen built-ins don't break the "override mistake" (e.g. `this.name = 'X'` in an Error subclass).
- Freezes built-ins (`Object.freeze` appears in the injected code). Host functions are wrapped, and values crossing the boundary are sanitized (`primitivizeDeep`, JSON round-tripping, `__proto__: null` objects).
- Another injected piece reads built-ins up front: "Every built-in the shim uses is read now, before any script runs. A script can replace a global (Reflect, say), and a shim that read it at call time would hand the replacement a built-in."

## 3. Source rewriting (instrumentation)

The shim's `Function.prototype.toString` override strips markers with names like `stepAfterDirectives`, `rawMarkCall`, `onceBeforeLiteral`, `onceBeforeAssignment`, `stepInBlock` and `stepInExpression`. That implies the script source is parsed and rewritten before it runs:
- **Step counters** are inserted at loops and function bodies (`stepInBlock`, `stepInExpression`).
- **"Raw marks"** are inserted around template literals (`rawMarkCall`; a `WeakMap` of `raw` descriptors; an `installRawMark` check). The purpose isn't stated in the strings I saw. It looks like provenance tracking for tagged templates such as `$\`...\``.
- The shim then restores the original text if the script prints a function, so the script doesn't see the instrumentation.
- Parse-level guards produce the model-facing errors in the prompt file: "JavaScript has no triple-quoted strings," "would overwrite <name> (a helper, a tool or a JavaScript built-in)," and "TypeError: a Promise was used without await." A hooks-module checker in the same bundle (a different feature) also refuses dynamic `import()`, so this bundle contains an AST-walking linter.

## 4. Resource limits enforced by the runtime

- **Step budget:** "a step is one pass through a loop or one call of a function." Steps are "handed out a stride at a time," and the clock is read only when a stride ends. Error: "a turn ran N steps, its budget ... End the loop, or await a tool call or a timer in it."
- **Wall clock per turn:** A "turn" is the code that runs from the script's start, a tool call's result, or a timer's firing until the next tool call's result or timer. Error mentions regular-expression matches over long inputs eating that time.
- **Memory limit:** checked periodically via a host `checkMemory` callback. Error: "the code used more than <N> ... Set large variables to null to free them."
- **Whole-script limit:** "REPL execution exceeded its wall-clock limit ..., not counting time at permission prompts," plus a separate "hard wall-clock limit." Default 30000 ms, max 600000 ms per the schema text.
- **Leftover code:** a shorter clock ("leftoverDeadline") stops code from detached or finished scripts. Comments say the host-supplied checks (`markStop`, `isLeftover`, `checkMemory`) are never reachable from script code ("whatever it throws ends in this catch and never reaches script code"). One comment cites internal review IDs (REPLTOOL-07), so this part went through a security review.
- Unhandled rejections from stopped code are swallowed instead of crashing the process.

## 5. Tool bridge: tools as globals

- Each Claude Code tool (`Read`, `Write`, `Edit`, `Glob`, `Grep`, the shell tool) is exposed as an async global and as `tools.<name>(input)`. MCP tools are exposed by full name, or as `tools["name"]` if the name has a `-`.
- Helper globals visible in the strings: `searchTools(words)`, `describeTool(name)` (returns an input schema), `self.log(...)`, `console.*`, `sleep()` and timers, `preview(...)`, a `budget` object (`total`, `spent`, `remaining`), and `$` for shell commands (`.text()`, `.json()`, `.nothrow()`, `.timeout()`).
- The bundle contains TypeScript declarations for the script globals ("The globals of a REPL script, as TypeScript declarations ... `interface Tools` covers the built-in tools a script can call that aren't in your tool list"), generated per session and including MCP tools.
- A `$.model.classify` helper appears in a nearby chunk (it asks a model to choose among labels). I can't tell from the strings whether it is part of Code Mode or a sibling feature.
- Tool results are normalized for the script: Read returns `file.content` with no line numbers (up to 256 MiB), notebooks parse into `file.cells`, and results must be JSON-serializable (errors for BigInt, circular references, too-deep or too-large values).
- Result caps appear as `tool_result` notes: a per-result image cap, a document (PDF) cap, a per-result note cap, and an output truncation that keeps head and tail of each returned key with a marker in the middle.

## 6. Async execution lane

- A `REPL` call can return a receipt, `(dispatched #N)`, immediately. The script's output then arrives later as `<event kind="repl-eval">` entries, and `<event kind="repl-status">` names scripts still running.
- Scripts start in send order. A script still running after about N seconds becomes `detached`, runs alongside later scripts, and shares variables.
- Late output (logged after a script ended) is batched and delivered to PostToolUse hooks before it reaches the model. A hook's `updatedToolOutput` is ignored if it doesn't match the REPL Output shape ("that rewrite is ignored and the output goes on without it").
- Stop paths: user Esc or Stop, a No on a permission prompt (field values `'user'` and `'refusal'`), `TaskStop`, or Claude Code itself. Calls left running are listed ("They may have run in part or in full, or may still be running, so check before making them again"). MCP calls that moved to the background are reported separately.
- A "transcript that ends on" an early-return receipt "is treated as a finished turn" on resume (`conversationRecovery.ts` is named in a schema comment).

## 7. Permissions and safety integration

- Every inner tool call goes through the normal permission pipeline: deny and ask rules, `PreToolUse` hooks, and prompts ("Each tool call that needs approval while this code runs is still checked on its own, by auto mode, by you or by a hook you've set up").
- Refused inner calls are collected and reported back ("Tool calls that were refused while this script ran" / "after this script returned") and can be repeated in the output.
- **Auto mode** has its own code-level classifier gate with specific refusals, each ending "This is not a judgment that the code is unsafe":
  - Code containing `\uXXXX` escapes is not run (the classifier can't check them). The model is told to use `\x1b` or `\u{1b}` forms.
  - Code is not run after a hook changed its call from what the model wrote, or an earlier call in the same response. The model may resend it once, in a response with no other tool calls.
  - Reads and searches are judged as part of the call that makes them, so they wait on the classifier.
- When the user approves manually: "Yes runs Claude's code. The line at the top is Claude's own summary of it, and nothing checks it against the code." That is the `description` field shown on the approval card.
- Sandbox interplay: a shell call that was blocked in the sandbox and is "waiting to run again outside it" is reported in output notes.
- Provenance markers: results carry "provenance markers of what this script, or an earlier one whose variables it can read, got from its tool calls," placed ahead of the output. The purpose isn't stated in the strings I saw; it looks like tracking where data came from across persistent variables.
- A plugin or hook that restarts a call is reported: "had already run, and a plugin's hook had started it again."

## 8. Session, UI and gating

- Env vars in the binary: `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE`, plus `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART` and `..._RESTARTED_FROM` (the restart-after-confirm flow the docs describe).
- Startup gating and the first-run confirmation, with notice text recorded in the prompt file ("This is an early experiment ... Remote Control, Claude in Chrome and computer use are off").
- Transcript: scripts appear as collapsed **Code** rows; the transcript viewer (Ctrl+O) shows them.
- Tool-calls-used tracking: output tells the model which tools "this conversation's prompt did not yet carry" were called, with a `tools-used` transcript entry. This suggests the tool list in the prompt is built lazily, with only the tools a script has used (and those it found via `searchTools`) described in full.
- Several feature-flag-style names appear near this code (`tengu_*` strings). I could not tie any of them to Code Mode specifically.

## Caveats

- Based only on strings and comments in a minified, bundled binary. I did not decompile, trace or run Code Mode.
- Names in `code like this` are quoted from the binary. My descriptions of how the pieces connect are inference.
- The architecture text is incomplete: `strings -n 40` drops short strings, and interpolated numbers (limits and timeouts) appear as `<N>`.
