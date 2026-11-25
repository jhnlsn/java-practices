// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ne}from"/$bunfs/root/chunk-69qhefwa.js";import{Cl,Hn}from"/$bunfs/root/chunk-f9x2f6cx.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";function dl(){if(!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Cl()&&!Hn()&&!s.CLAUDE_CODE_REMOTE)return!1;return!0}function Cme(e){return dl()&&e.agentId===void 0}
export{dl,Cme};
