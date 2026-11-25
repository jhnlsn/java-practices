// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ds}from"/$bunfs/root/chunk-92tjbk8v.js";import{S,Ir}from"/$bunfs/root/chunk-y98mhv74.js";import{SP}from"/$bunfs/root/chunk-v6p5k257.js";var e=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function sRs(n){return SP(n)||typeof n==="string"&&e.test(n)}function ve(n){if(n==null)return;return/^[A-Za-z0-9_-]{1,128}$/.test(n)&&(sRs(n)||Ds(n)===n)?Ir(n):S("nonconforming")}function mGn(n){return Ir(n.map((t)=>ve(t)).join(","))}
export{sRs,ve,mGn};
