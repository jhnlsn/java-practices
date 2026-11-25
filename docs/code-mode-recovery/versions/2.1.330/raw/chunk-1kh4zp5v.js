// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{hu}from"/$bunfs/root/chunk-59mwkeke.js";import{ce}from"/$bunfs/root/chunk-865at33z.js";function rlt(o){let t=ce().loadedModules.find((s)=>s.name===o);return t===void 0||hu(t)}function $ws(){let o=new Map,t=new Map,s=new Set;return{list:(e)=>rlt(e)?[...o.get(e)?.values()??[]]:[],own:(e)=>{let r=o.get(e)??new Map;return o.set(e,r),r},serverKey:(e)=>t.get(e),ownerOfKey:(e)=>[...t.entries()].find(([,r])=>r===e)?.[0],keyed:(e,r)=>{t.set(e,r),s.add(r)},minted:(e)=>s.has(e),forget:(e)=>{o.delete(e),t.delete(e)}}}var pM=$ws();export{rlt,$ws,pM};
