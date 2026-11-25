// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ke,ge}from"/$bunfs/root/chunk-865at33z.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{M,Nr}from"/$bunfs/root/chunk-4smdap7r.js";var l=256;function kka(e){let n=new Set(Nr(ge().seenSecurityWarnings));return e.filter((r)=>r.seenKey===void 0||!n.has(r.seenKey))}function Eka(e,n){if(e.length===0)return;Ke((r)=>{let t=Nr(r.seenSecurityWarnings),s=new Set(t),o=M(e).filter((a)=>!s.has(a));if(o.length===0)return r;return{...r,seenSecurityWarnings:[...t,...o].slice(-l)}},n)}async function nGr(){try{let[{getAllBaseTools:e},{collectPermissionRuleAdvisories:n},{loadAllPermissionRulesFromDisk:r}]=await Promise.all([import("/$bunfs/root/chunk-y8qengw9.js"),import("/$bunfs/root/chunk-6n47jape.js"),import("/$bunfs/root/chunk-r6q3qqsa.js")]);return M(n(r(),e).map((t)=>t.line))}catch(e){return i(e),[]}}
export{kka,Eka,nGr};
