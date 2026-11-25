// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{pt}from"/$bunfs/root/chunk-5w3q3ks2.js";import{u7}from"/$bunfs/root/chunk-x7f8sr97.js";var Ouo="mixed";function ron(n,r){let i=pt(r)?.toLowerCase();return i===void 0||i===n?n:n===void 0?i:Ouo}function Sal(n){return n==="none"}function lfe(n,r){return n===void 0?r?"none":"unknown":n===Ouo?Ouo:{organizationUuid:n}}function oon(n){return lfe(gbt(n),/"type":"(?:user|assistant)"/.test(n))}function gbt(n){let r;for(let i of n.split(`
`))if(i.includes('"type":"hybrid-organization"'))r=ron(r,u7(i,"hybrid-organization","organizationUuid"));return r}
export{Ouo,ron,Sal,lfe,oon,gbt};
