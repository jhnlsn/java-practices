// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";var C4o="[3P telemetry] OTEL diag error:";class EQs{error(r,...e){if(s.CLAUDE_CODE_OTEL_DIAG_STDERR)process.stderr.write(`${C4o} ${r}
`);t(`${C4o} ${r}`,{level:"error"})}warn(r,...e){t(`[3P telemetry] OTEL diag warn: ${r}`,{level:"warn"})}info(r,...e){return}debug(r,...e){return}verbose(r,...e){return}}
export{C4o,EQs};
