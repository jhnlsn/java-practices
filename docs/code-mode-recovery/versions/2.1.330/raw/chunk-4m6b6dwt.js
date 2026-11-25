// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Le}from"/$bunfs/root/chunk-0jve1fep.js";import{gN}from"/$bunfs/root/chunk-qf73a9we.js";import{Bje}from"/$bunfs/root/chunk-xv4nm9fz.js";function E9l(t,o,s){let e=P1o(s);if(e.size===0)return;t.dropRewound(Bje,e),gN(o.removeByFilter((n)=>{let r=n.pollEvent?.replToolUseId;return r!==void 0&&e.has(r)},{reason:"rewound"}),"a rewind removed the REPL call this event comes from")}function P1o(t){let o=new Set;for(let s of t){if(s.type!=="assistant"||!Array.isArray(s.message.content))continue;for(let e of s.message.content)if(Le(e)&&e.type==="tool_use"&&typeof e.id==="string")o.add(e.id)}return o}
export{E9l,P1o};
