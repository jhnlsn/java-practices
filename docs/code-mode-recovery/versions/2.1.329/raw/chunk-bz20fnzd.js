// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{M}from"/$bunfs/root/chunk-b8e2yqms.js";function gvl(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",Tdn="Per your organization's policy, some features are limited",qko="HIPAA configured",o=new Set(["hipaa","zdr"]);function oTr(n){return o.has(n)||!1}function sTr(n){let e=M(n),i=e.filter(oTr);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function _Re(n){return M(n).filter((e)=>a.has(e))}
export{gvl,Tdn,qko,oTr,sTr,_Re};
