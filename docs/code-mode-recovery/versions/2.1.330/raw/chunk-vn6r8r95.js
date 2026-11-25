// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s,So}from"/$bunfs/root/chunk-c203g5kd.js";import{vV}from"/$bunfs/root/chunk-k67pwqya.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";class u{deps;loggedDowngrade=!1;constructor(e){this.deps=e}resolve(){return this.decide().state}verdict(){return this.decide().verdict}decide(){return{state:{member:!1},verdict:"external_build"}}}var m=null;var S=new j(()=>new u(()=>m));function p(e,r){if(!Array.isArray(e))return!1;return P(e,r.mainModelOverrideKeys())}function P(e,r){let o=new Set,i=[];for(let t of e){if(typeof t!=="string")continue;if(t.length>1&&t.endsWith("*"))i.push(t.slice(0,-1));else o.add(t)}if(o.size===0&&i.length===0)return!1;return r.some((t)=>o.has(t)||i.some((n)=>t.startsWith(n)))}function v(e){if(!e||typeof e!=="object")return{};let r=e,o=(t)=>typeof t==="string"&&t.trim()!==""?t:void 0,i=r.severity;return{model:o(r.model),s1Suffix:o(r.s1Suffix),s2Suffix:o(r.s2Suffix),s1Prefill:o(r.s1Prefill)?.trimEnd(),severity:i!==null&&typeof i==="object"?i:void 0}}function oho(e){if(typeof e==="string")return e;if(!Array.isArray(e))return"";return e.filter((r)=>r!=null&&r.type==="text"&&typeof r.text==="string").map((r)=>r.text).join(`
`)}
export{oho};
