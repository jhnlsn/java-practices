// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{Hee}from"/$bunfs/root/chunk-2yx6c1y2.js";function pDe(){let e=s.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;if(!e||e.toLowerCase()==="inherit")return;if(s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE&&Hee("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim()!==e)return;return e}
export{pDe};
