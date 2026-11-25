// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Fr}from"/$bunfs/root/chunk-78g0060s.js";import{ise,B}from"/$bunfs/root/chunk-adx6804h.js";B();function l(r){return r}function auo(r){return l(new Set(r))}function usl(r){let t=new Set,n=(e)=>{if(Array.isArray(e))e.forEach(n);else if(typeof e==="object"&&e!==null){let{properties:o}=e;if(typeof o==="object"&&o!==null)for(let a of Object.keys(o))t.add(a);Object.values(e).forEach(n)}};try{n(ise(r,{unrepresentable:"any"}))}catch{}return l(t)}function Ton(r,t){let n;return Fr((r??[]).map((e)=>typeof e==="number"||typeof e==="string"&&(n??=t()).has(e)?String(e):"*").join("."))}var i=new Set(["type","subtype","hook_event_name"]);function VAi(r){if(r?.code!=="invalid_union")return r?.path??[];let t=[];for(let n of r.errors){let e=n.some(({path:o})=>o.length===1&&o.every((a)=>i.has(a)))?[]:VAi(n[0]);if(e.length>t.length)t=e}return[...r.path,...t]}
export{auo,usl,Ton,VAi};
