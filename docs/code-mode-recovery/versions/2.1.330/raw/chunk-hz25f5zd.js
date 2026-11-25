// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";import{M}from"/$bunfs/root/chunk-4smdap7r.js";function a0l(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",chn="Per your organization's policy, some features are limited",dOo="HIPAA configured",o=new Set(["hipaa","zdr"]);function OIr(n){return o.has(n)||!1}function IIr(n){let e=M(n),i=e.filter(OIr);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function RPe(n){return M(n).filter((e)=>a.has(e))}
export{a0l,chn,dOo,OIr,IIr,RPe};
