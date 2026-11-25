// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{gon}from"/$bunfs/root/chunk-bxxahqqj.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var t=new qe(()=>({byToolUse:new Map}));function z7s(n,e,i){t.of(n).byToolUse.set(e,i),gon(n,e,()=>{NKr(n,e)})}function NKr(n,e){t.peek(n)?.byToolUse.delete(e)}function V7s(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function K7s(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return NKr(n,e),i}
export{z7s,NKr,V7s,K7s};
