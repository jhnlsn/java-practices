// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{gu}from"/$bunfs/root/chunk-g40a3j75.js";import{Dn}from"/$bunfs/root/chunk-qb0dm7yx.js";var f2="SendFile",rel="Send one or more files to another Claude Code session";function oel(e,s){return`Send files to another Claude Code session \u2014 a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.

Use this when a file is the thing to hand over \u2014 a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${Dn} instead. For agents inside this session (subagents, teammates), also use ${Dn} \u2014 they share your filesystem and can read the file at its path directly.

\`to\` accepts a peer session name from ${gu}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.

Each file is capped at ${s} MiB, at most ${e} files per send. Files must exist on the local filesystem \u2014 write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.

Example: ${f2}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`}
export{f2,rel,oel};
