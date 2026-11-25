// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{de}from"/$bunfs/root/chunk-t57w17k7.js";var n=de({scale:void 0},(e)=>{e.scale=void 0});function n7e(){let e=s.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP??1;if(typeof Bun<"u"&&typeof Bun.unsafe.setJITPolicy==="function")Bun.unsafe.setJITPolicy(e),n.scale=e;return e}function bzi(){return n.scale}
export{n7e,bzi};
