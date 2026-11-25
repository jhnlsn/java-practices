// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ht}from"/$bunfs/root/chunk-mzmcvr6c.js";import{NX}from"/$bunfs/root/chunk-q3a5dy2r.js";var qSo="mixed";function Pdn(n,r){let i=ht(r)?.toLowerCase();return i===void 0||i===n?n:n===void 0?i:qSo}function mSl(n){return n==="none"}function ime(n,r){return n===void 0?r?"none":"unknown":n===qSo?qSo:{organizationUuid:n}}function Odn(n){return ime(nvt(n),/"type":"(?:user|assistant)"/.test(n))}function nvt(n){let r;for(let i of n.split(`
`))if(i.includes('"type":"hybrid-organization"'))r=Pdn(r,NX(i,"hybrid-organization","organizationUuid"));return r}
export{qSo,Pdn,mSl,ime,Odn,nvt};
