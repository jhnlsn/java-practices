# Claude Code Code Mode: REPL tool prompt text

Extracted from the installed binary `/Users/jhnlsn/.local/bin/claude` (Claude Code v2.1.329) on 2026-11-19, using `strings -n 40`.

Caveats:
- `strings` splits text wherever the prompt interpolates a value (tool names, numbers), so gaps appear as line breaks or `<...>` placeholders I added.
- Fragments are in binary order, not necessarily the order the model reads them.
- This is one fragment set. Other Code Mode text, such as a system-prompt section, may exist that I haven't located.
- Which fragments belong to the tool description versus the system prompt is unconfirmed.

## Core tool description

```
REPL is your programming interface to Claude Code's tools. Use it to loop, branch, and compose tool calls with code.
Write JavaScript that calls tools as async functions:
const { filenames } = await Glob({ pattern: 'src/**/*.ts' })
  const { file } = await Read({ file_path: f })
  if (file.content.includes('oldName')) {
    await Edit({ file_path: f, old_string: 'oldName', new_string: 'newName', replace_all: true })

**IMPORTANT: Batch ALL operations into ONE REPL call.** Don't make multiple separate REPL calls - write a complete script that does everything.
All tools work as async functions: `Read`, `Write`, `Edit`, `Glob`, `Grep`, `<shell tool>`, etc. MCP tools are callable by their full name (e.g. `await mcp__slack__slack_send_message({...})`).

const { filenames } = await Glob({ pattern: '*.ts' })
const { file } = await Read({ file_path: 'config.json' })
await Edit({ file_path: 'foo.ts', old_string: 'old', new_string: 'new' })
- Use `Promise.all()` for parallel operations
- Last expression is returned as the result
```

Short descriptions also found:
- `Execute JavaScript to read, write, edit files and run shell commands`
- `Execute JavaScript code with access to Claude Code tools`

## Cost and output guidance

```
What a `REPL` call costs: mostly what it returns, which stays in your context for every later step. About 150 lines of output cost as much as one more call. So search first and print ranges of long files, summarise data files and logs inside the script (counts, shapes, the odd rows), and after an edit return the failing tests and `git diff --stat` unless you mean to review the diff. This is about how much you print, not how much you check: write and run tests as you otherwise would.

A script's output is its last expression's value plus anything it `self.log(...)`s along the way. What it returns is added to your context and stays there; the value itself stays in the REPL whether you return it or not. So return what you want to read now, and keep the rest in variables to slice or search later.

Each part of what a script returns (each key of a returned object, what it logged) is shown cut to about <N> characters, head and tail kept, with a marker where the middle went.

`&`, `<` and `>` are shown to you as `&amp;`, `&lt;` and `&gt;`. That's only how output is shown: your files and values aren't changed, so write the plain characters in your code.
```

## Execution model

```
How scripts run: your scripts run in one persistent VM and start in the order you send them; a script starts when the one before it ends or has run for about <N> s. A script still running by then is `detached`: it keeps running beside the scripts after it, and they share variables. So put steps that depend on each other in one script, or send the second script only after the first one's outcome has come back. A `REPL` call only dispatches its script and returns `(dispatched #N)` at once. A receipt means the script is queued or running, so sending it again would run it twice. If a `<tool>` call returns its script's output instead, calls in this session run until their script ends, so await everything a script starts: a call that isn't awaited may not run, or may not run to its end.

How output arrives: after your reply's tool calls, if a script you sent in it is still running, the harness waits before continuing, until the script ends or something else arrives, such as a message from the user; things that arrive close together come together. What arrived then comes back in the `<tool>` result of your reply, in the order it arrived: the script's
`<event kind="repl-eval">` (one JSON object: `eval` is the script's number, with its `log` lines and its `result` or `error`)
`<event kind="repl-eval" eval="N">` (its `<log>` lines and its `<result>` or `<error>`)
, other events, and an `<event kind="repl-status">` naming any script still running. A message the user sent follows the tool results as the user's own text. You don't need to call `<wait tool>` after a `REPL` call. Output a script logs after it has ended arrives the same way, as late output under its number.

So waiting inside a script costs you no turns and keeps no one waiting on you: anything addressed to you ends the wait within a few seconds. Put all the work this turn can do into one script, including awaiting a build or a test run and acting on its exit code, and come back when the next step needs your judgment about a result. A long command that a script awaits runs until it ends or reaches its timeout (10 minutes if you gave it none), when it is stopped (background tasks are off in this session, so what the note on `$` says about the background does not apply)
 To let a build run while you do other things, start it without awaiting it, log its result and end the script on another value (`const build = $`npm run build`.nothrow().then(r => self.log(r.exitCode, preview(r))); 'started'`).
`<wait tool>` waits until a script ends or an event arrives, and says what is still running. When nothing needs doing, ending your turn works too: results start your next turn when they land.
```

## Shell and file guidance

```
({command: "git commit -F - <<'EOF'\n"+msg+"\nEOF"})`. Generic temp paths get clobbered by parallel agents.
For PowerShell, quote by doubling single quotes: `"'"+s.replaceAll("'", "''")+"'"`; for multi-line input use a here-string `@'\n...\n'@` (closing `'@` at column 0).

To keep a dev server or a watcher running, start it without awaiting it, as for a build below; it is stopped at its timeout.
To keep a dev server or a watcher running, await it with a short timeout: `const server = await $`npm run dev`.timeout(3000)` moves it to the background after 3 s, where the user can see and stop it, and `server.running.outputPath` names the file with its output. Don't use `nohup`, `setsid` or `&` for this: Claude Code can't show or stop what they start.

For a text file on this machine, a script gets the text in `file.content`, with no line numbers: the whole file (up to 256 MiB) unless it passes `offset` or `limit`

[notebooks] parses a notebook into its cells. For the cells, (await tools.<...>({file_path: path})).file.cells; for the raw JSON, await $`cat ${path}`.json()
```

## Input schema field descriptions

```
code:        JavaScript code to execute. Supports top-level await. State persists across calls.
description: Clear, concise description of what this script does in active voice (5-10 words). E.g. "Trace upgrade message to its feature flag"
timeout:     Optional limit on the script's own running time in milliseconds; time spent inside the tool calls it awaits is not counted (default 30000, max 600000)
```

Output schema fields seen: `log` (what the script logged via `self.log`), a stop-reason field (`'user'` for Esc/Stop, `'refusal'` for a No on a permission prompt), a flag for receipt-only outputs of async evals, a cancelled-before-run field (`'person'` or `'other'`), the eval's number on the async lane, and the script's run time in ms.

## Error and guard messages (shown to the model)

```
The script did not run: it failed to parse, so nothing in it was executed.
JavaScript has no triple-quoted strings: use a template literal, or join lines with \n.
Use the tool globals instead: await Read({file_path: '...'}), await Glob({pattern: '...'}), the registered shell tool, etc.
The script did not run: it would overwrite <name> (a helper, a tool or a JavaScript built-in). A top-level declaration, or an assignment to a name the script does not declare itself, writes the global and so changes it for every later script. Use another name, or declare it inside a function, where it stays local.
TypeError: a Promise was used without await
searchTools: pass the words to look for, e.g. searchTools('slack message')
describeTool: pass a tool name (a string), not a <...>
Tool calls that were refused while this script ran:
Tool calls that were refused after this script returned:
```

## User-facing Code Mode notice text

```
<Product>, Claude works by writing and running JavaScript that calls its tools, instead of calling them one at a time.
This is an early experiment. It can behave differently from normal Claude Code, and it may change or be removed in any release. Remote Control, Claude in Chrome and computer use are off in <Code Mode>.
Sessions start in the same permission mode as without <Code Mode>, which can be auto mode where it's available. In auto mode, the safety check reads each piece of JavaScript once, before it runs. It doesn't check each tool call that the code then makes, so it can't see values that the code works out as it runs.
```
