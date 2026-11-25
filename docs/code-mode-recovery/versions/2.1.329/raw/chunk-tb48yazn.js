// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{$Ss,IBi,UL,hn}from"/$bunfs/root/chunk-aq3ms068.js";import{wje}from"/$bunfs/root/chunk-x4thycz5.js";import{createHash as g}from"crypto";function ixt(){let{value:e,source:r}=hn(wje,null);return{flag:n(e),source:r}}function n(e){let{flag:r,problem:o}=$Ss(e);if(o!==void 0)t(`org-config gate: ${wje} is malformed (${o}); treating as off`,{level:"warn"});return r}async function A1s(e,r,o){let a=await IBi(wje,null,e,r,o);return a.served?{flag:n(a.value),source:"payload"}:void 0}function _jl(e=ixt,r=UL){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function R1s(e){let r=g("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function x1s(e,r){return e.enabled&&r<e.percent}
export{ixt,A1s,_jl,R1s,x1s};
