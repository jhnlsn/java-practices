// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ee,Vr,kT}from"/$bunfs/root/chunk-m55722gg.js";import{Wje}from"/$bunfs/root/chunk-js5e5dz7.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{cH}from"/$bunfs/root/chunk-mhspsf6c.js";import{va}from"/$bunfs/root/chunk-qypdkxad.js";var FWr=5,hwa="Structured output was retracted by a model fallback and no retry produced a valid result",a=600;function gwa(t,r,e){if(r>0)return`Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;let n=`Failed to provide valid structured output after ${t} attempts`;return e===void 0?n:`${n} \u2014 last StructuredOutput error: ${e}`}function R6s(t){let r=typeof t==="string"?t:Array.isArray(t)?t.flatMap((d)=>d.type==="text"?[d.text]:[]).join(`
`):void 0;if(r===void 0)return;let n=r.replace(/^<tool_use_error>/,"").replace(/<\/tool_use_error>$/,"").replace(Wje,`
`).split(`
`).map(kT).join(`
`),o=cH(n,{prependMarker:!1}).sanitized,u=Vr(o);if(u.length===0)return;let s=u.length>a?ee(u,a)+"\u2026":u;return cH(s,{prependMarker:!1}).sanitized}function _wa(t,r){try{let e=r===void 0?0:t.lastIndexOf(r)+1;return c(e===0?t:t.slice(e))}catch(e){i(e);return}}function c(t){let r=new Set;for(let e of t){if(e?.type!=="assistant")continue;let n=e.message.content;if(!Array.isArray(n))continue;for(let o of n)if(o.type==="tool_use"&&o.name===va)r.add(o.id)}if(r.size===0)return;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n?.type!=="user")continue;let o=n.message.content;if(!Array.isArray(o))continue;for(let u=o.length-1;u>=0;u--){let s=o[u];if(s?.type==="tool_result"&&s.is_error===!0&&r.has(s.tool_use_id))return R6s(s.content)}}return}
export{FWr,hwa,gwa,R6s,_wa};
