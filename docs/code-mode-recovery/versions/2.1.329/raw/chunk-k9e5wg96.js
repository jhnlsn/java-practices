// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ke,me}from"/$bunfs/root/chunk-aq3ms068.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{M,Or}from"/$bunfs/root/chunk-b8e2yqms.js";var l=256;function wua(e){let n=new Set(Or(me().seenSecurityWarnings));return e.filter((r)=>r.seenKey===void 0||!n.has(r.seenKey))}function kua(e,n){if(e.length===0)return;Ke((r)=>{let t=Or(r.seenSecurityWarnings),s=new Set(t),o=M(e).filter((a)=>!s.has(a));if(o.length===0)return r;return{...r,seenSecurityWarnings:[...t,...o].slice(-l)}},n)}async function pFr(){try{let[{getAllBaseTools:e},{collectPermissionRuleAdvisories:n},{loadAllPermissionRulesFromDisk:r}]=await Promise.all([import("/$bunfs/root/chunk-mf9984vp.js"),import("/$bunfs/root/chunk-ajp2r2g9.js"),import("/$bunfs/root/chunk-3316mvxd.js")]);return M(n(r(),e).map((t)=>t.line))}catch(e){return i(e),[]}}
export{wua,kua,pFr};
