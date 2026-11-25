// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{kTe}from"/$bunfs/root/chunk-dfyba0ch.js";import{eh}from"/$bunfs/root/chunk-qyhf6bts.js";import{D9e}from"/$bunfs/root/chunk-w1zyy3zs.js";import{WWe}from"/$bunfs/root/chunk-wpyz5pav.js";import{l4e,snt}from"/$bunfs/root/chunk-86sakbrd.js";import{bJt}from"/$bunfs/root/chunk-wbm3qtjx.js";import{kme}from"/$bunfs/root/chunk-ts09sys6.js";function osr(e){if(WWe(e.client,e.name)!==void 0)return"file_reference";if(bJt(e.meta)!==void 0&&D9e.some((o)=>kme(e.client,o)))return"listed_mark";if(eh(e.client.config)===void 0&&kTe(e.client)===void 0)return;let{marked:r,unfilled:n,everyCall:i}=l4e(e.schema);return r.length>0||n.length>0||i||snt(e.schema).length>0?"schema_mark":void 0}
export{osr};
