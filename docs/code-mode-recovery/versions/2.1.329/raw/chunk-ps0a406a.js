// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ta}from"/$bunfs/root/chunk-mtj7v8bq.js";import{it,Dt}from"/$bunfs/root/chunk-5ghdkswv.js";import{T}from"/$bunfs/root/chunk-rhrgztck.js";function UKr(r,i){let s=r.sameTurnErroredToolUseIds;if(s===void 0||s.size===0)return null;let o=new Map;for(let t of r.sameTurnToolUses??[])for(let e of t.message.content){if(e.type!=="tool_use"||e.name!==it&&e.name!==Dt||!T(e.input))continue;let a=e.input.file_path??e.input.path??e.input.file,n=typeof a==="string"?Ta(a):null;if(n===null||!i.includes(n))continue;if(s.has(e.id))o.set(n,!0);else if(e.name===Dt)o.set(n,!1)}return i.find((t)=>o.get(t)===!0)??null}
export{UKr};
