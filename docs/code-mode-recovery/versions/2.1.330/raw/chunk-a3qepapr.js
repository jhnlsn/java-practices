// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";import{NRs,t3i,zN,gn}from"/$bunfs/root/chunk-865at33z.js";import{rze}from"/$bunfs/root/chunk-rvyhd8z3.js";import{createHash as g}from"crypto";function lMt(){let{value:e,source:r}=gn(rze,null);return{flag:n(e),source:r}}function n(e){let{flag:r,problem:o}=NRs(e);if(o!==void 0)t(`org-config gate: ${rze} is malformed (${o}); treating as off`,{level:"warn"});return r}async function nVs(e,r,o){let a=await t3i(rze,null,e,r,o);return a.served?{flag:n(a.value),source:"payload"}:void 0}function P8l(e=lMt,r=zN){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function rVs(e){let r=g("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function oVs(e,r){return e.enabled&&r<e.percent}
export{lMt,nVs,P8l,rVs,oVs};
