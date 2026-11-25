// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{f}from"/$bunfs/root/chunk-78g0060s.js";import{a,Ma}from"/$bunfs/root/chunk-y53wbr8a.js";import{eL,zR}from"/$bunfs/root/chunk-2zeyvjwb.js";import{RPe}from"/$bunfs/root/chunk-hz25f5zd.js";var n="tengu_org_policy_denied";function r(i,o){let e=zR(i);if(e===null||e==="unregistered")return null;return{org_policy_key:f(i),org_policy_deny_kind:f(e),org_policy_taint_named:RPe(eL()).length>0,surface:f(o)}}function $H(i,o){let e=r(i,o);if(e)a(n,e)}async function RG(i,o){let e=r(i,o);if(e)await Ma(n,e)}
export{$H,RG};
