// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ee,Wr,lC}from"/$bunfs/root/chunk-7cfjrnwy.js";import{vze}from"/$bunfs/root/chunk-yesjd46y.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{k0}from"/$bunfs/root/chunk-yq00hd9s.js";import{ga}from"/$bunfs/root/chunk-2b1wcpvk.js";var Iqr=5,MIa="Structured output was retracted by a model fallback and no retry produced a valid result",a=600;function HIa(t,r,e){if(r>0)return`Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;let n=`Failed to provide valid structured output after ${t} attempts`;return e===void 0?n:`${n} \u2014 last StructuredOutput error: ${e}`}function JYs(t){let r=typeof t==="string"?t:Array.isArray(t)?t.flatMap((d)=>d.type==="text"?[d.text]:[]).join(`
`):void 0;if(r===void 0)return;let n=r.replace(/^<tool_use_error>/,"").replace(/<\/tool_use_error>$/,"").replace(vze,`
`).split(`
`).map(lC).join(`
`),o=k0(n,{prependMarker:!1}).sanitized,u=Wr(o);if(u.length===0)return;let s=u.length>a?ee(u,a)+"\u2026":u;return k0(s,{prependMarker:!1}).sanitized}function DIa(t,r){try{let e=r===void 0?0:t.lastIndexOf(r)+1;return c(e===0?t:t.slice(e))}catch(e){i(e);return}}function c(t){let r=new Set;for(let e of t){if(e?.type!=="assistant")continue;let n=e.message.content;if(!Array.isArray(n))continue;for(let o of n)if(o.type==="tool_use"&&o.name===ga)r.add(o.id)}if(r.size===0)return;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n?.type!=="user")continue;let o=n.message.content;if(!Array.isArray(o))continue;for(let u=o.length-1;u>=0;u--){let s=o[u];if(s?.type==="tool_result"&&s.is_error===!0&&r.has(s.tool_use_id))return JYs(s.content)}}return}
export{Iqr,MIa,HIa,JYs,DIa};
