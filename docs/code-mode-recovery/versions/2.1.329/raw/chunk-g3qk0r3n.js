// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{qQ}from"/$bunfs/root/chunk-pxy9yt8m.js";function nMe(){let e=s.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;if(!e||e.toLowerCase()==="inherit")return;if(s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE&&qQ("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim()!==e)return;return e}
export{nMe};
