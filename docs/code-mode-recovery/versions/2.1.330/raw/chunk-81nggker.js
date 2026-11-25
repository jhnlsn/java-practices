// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{L1}from"/$bunfs/root/chunk-865at33z.js";import{mt}from"/$bunfs/root/chunk-qdcbcsg7.js";import{Rn,ba}from"/$bunfs/root/chunk-2nv4wrez.js";import{k8e}from"/$bunfs/root/chunk-m0xr8k74.js";import{vsr}from"/$bunfs/root/chunk-qt3kq0hf.js";import{jfl,x7}from"/$bunfs/root/chunk-pyawkp3j.js";import{p0t}from"/$bunfs/root/chunk-a5r4xv9h.js";import{ksn,ppo}from"/$bunfs/root/chunk-5ft9yxne.js";import{eh}from"/$bunfs/root/chunk-qyhf6bts.js";function n(e){return x7()&&kJt(e)!==void 0}function pBa(e,r){try{if(!n(e))return!1;let o=ba("allow_connector_file_downloads");return o===null||p0t(o)==="policy_unread"&&!r}catch{return!1}}function w7r(e){return eh(e.config)!==void 0&&k8e(e.capabilities)&&x7()}function m8o(e){return n(e.config)||x7()&&vsr(e)!==void 0}function kJt(e){let r=jfl(e);if(r!==void 0)return r;let o=ppo(e);return o===void 0||!ksn()||!L1()||!Rn("allow_connector_file_downloads")?void 0:{via:"direct",mcpUrl:o.href,redirectedTo:mt().redirectedMcpAddresses.get(o.href)}}
export{pBa,w7r,m8o,kJt};
