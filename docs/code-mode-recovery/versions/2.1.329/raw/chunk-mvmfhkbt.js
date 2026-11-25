// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{u}from"/$bunfs/root/chunk-y98mhv74.js";import{a,ka}from"/$bunfs/root/chunk-487kez16.js";import{KH,QR}from"/$bunfs/root/chunk-r3ggct44.js";import{_Re}from"/$bunfs/root/chunk-bz20fnzd.js";var n="tengu_org_policy_denied";function r(i,o){let e=QR(i);if(e===null||e==="unregistered")return null;return{org_policy_key:u(i),org_policy_deny_kind:u(e),org_policy_taint_named:_Re(KH()).length>0,surface:u(o)}}function PM(i,o){let e=r(i,o);if(e)a(n,e)}async function c2(i,o){let e=r(i,o);if(e)await ka(n,e)}
export{PM,c2};
