// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Oe}from"/$bunfs/root/chunk-cqahc80t.js";import{Sl,On}from"/$bunfs/root/chunk-kgzzwvwc.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";function rl(){if(!Oe(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Sl()&&!On()&&!s.CLAUDE_CODE_REMOTE)return!1;return!0}function xfe(e){return rl()&&e.agentId===void 0}
export{rl,xfe};
