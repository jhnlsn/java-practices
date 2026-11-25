// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ba}from"/$bunfs/root/chunk-2nv4wrez.js";import{ont}from"/$bunfs/root/chunk-anfdrvmv.js";import{EW}from"/$bunfs/root/chunk-ye486ddj.js";function p0t(o){return o==="cache_miss"||o==="route_missing"?"policy_unread":"policy_denied"}function vBa(o){try{let e=ba(ont);return e===null||p0t(e)==="policy_unread"&&!o}catch{return!1}}function TBa(o,e){let n=ba(o);if(n!==null)return p0t(n);return e()?"uploads_off":EW()}
export{p0t,vBa,TBa};
