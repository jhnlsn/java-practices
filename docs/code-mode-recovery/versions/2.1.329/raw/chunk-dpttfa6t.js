// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ir}from"/$bunfs/root/chunk-y98mhv74.js";import{hre,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();function l(r){return r}function soo(r){return l(new Set(r))}function g7a(r){let t=new Set,n=(e)=>{if(Array.isArray(e))e.forEach(n);else if(typeof e==="object"&&e!==null){let{properties:o}=e;if(typeof o==="object"&&o!==null)for(let a of Object.keys(o))t.add(a);Object.values(e).forEach(n)}};try{n(hre(r,{unrepresentable:"any"}))}catch{}return l(t)}function vZt(r,t){let n;return Ir((r??[]).map((e)=>typeof e==="number"||typeof e==="string"&&(n??=t()).has(e)?String(e):"*").join("."))}var i=new Set(["type","subtype","hook_event_name"]);function Cyi(r){if(r?.code!=="invalid_union")return r?.path??[];let t=[];for(let n of r.errors){let e=n.some(({path:o})=>o.length===1&&o.every((a)=>i.has(a)))?[]:Cyi(n[0]);if(e.length>t.length)t=e}return[...r.path,...t]}
export{soo,g7a,vZt,Cyi};
