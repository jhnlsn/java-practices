// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Fa}from"/$bunfs/root/chunk-n2dbhmj2.js";import{lt,Dt}from"/$bunfs/root/chunk-rb36kwbn.js";import{T}from"/$bunfs/root/chunk-ma3kja9f.js";function oYr(r,i){let s=r.sameTurnErroredToolUseIds;if(s===void 0||s.size===0)return null;let o=new Map;for(let t of r.sameTurnToolUses??[])for(let e of t.message.content){if(e.type!=="tool_use"||e.name!==lt&&e.name!==Dt||!T(e.input))continue;let a=e.input.file_path??e.input.path??e.input.file,n=typeof a==="string"?Fa(a):null;if(n===null||!i.includes(n))continue;if(s.has(e.id))o.set(n,!0);else if(e.name===Dt)o.set(n,!1)}return i.find((t)=>o.get(t)===!0)??null}
export{oYr};
