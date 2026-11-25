// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{de}from"/$bunfs/root/chunk-pb0k2vmd.js";var n=de({scale:void 0},(e)=>{e.scale=void 0});function l9e(){let e=s.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP??1;if(typeof Bun<"u"&&typeof Bun.unsafe.setJITPolicy==="function")Bun.unsafe.setJITPolicy(e),n.scale=e;return e}function qLi(){return n.scale}
export{l9e,qLi};
