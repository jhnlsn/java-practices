// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function kyt(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="tool_reference"}function Kso(e,o){return`${e}
${o}`}function _Nt(e){return kyt(e)&&"tool_name"in e&&typeof e.tool_name==="string"}function yNt(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="tool_result"&&"content"in e&&Array.isArray(e.content)}var u=Object.freeze([]),c=new WeakMap;function lwi(e){let o=c.get(e);if(o===void 0){let t=[];for(let n of e){if(!yNt(n))continue;for(let r of n.content)if(_Nt(r))t.push({toolUseId:n.tool_use_id,toolName:r.tool_name})}o=t.length===0?u:t,c.set(e,o)}return o}function $$e(e,o){let t=[];for(let n of e){if(o?.surfacedOnWire!==void 0&&n.type==="attachment"&&n.attachment.type==="deferred_tools_delta"){let s=n.attachment.surfacedNames;for(let l of Array.isArray(s)?s:[])if(typeof l==="string"&&o.surfacedOnWire.has(l))t.push({toolUseId:n.uuid,toolName:l});continue}if(n.type!=="user")continue;let r=n.message?.content;if(!Array.isArray(r))continue;for(let{toolUseId:s,toolName:l}of lwi(r))if(typeof s==="string")t.push({toolUseId:s,toolName:l})}return t}
export{kyt,Kso,_Nt,yNt,lwi,$$e};
