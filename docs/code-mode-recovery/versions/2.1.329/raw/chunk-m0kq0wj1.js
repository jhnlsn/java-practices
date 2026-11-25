// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";var ZWo="[3P telemetry] OTEL diag error:";class Zqs{error(r,...e){if(s.CLAUDE_CODE_OTEL_DIAG_STDERR)process.stderr.write(`${ZWo} ${r}
`);t(`${ZWo} ${r}`,{level:"error"})}warn(r,...e){t(`[3P telemetry] OTEL diag warn: ${r}`,{level:"warn"})}info(r,...e){return}debug(r,...e){return}verbose(r,...e){return}}
export{ZWo,Zqs};
