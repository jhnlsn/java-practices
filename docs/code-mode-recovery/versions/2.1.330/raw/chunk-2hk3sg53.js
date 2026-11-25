// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Rs}from"/$bunfs/root/chunk-f9x2f6cx.js";import{m,l}from"/$bunfs/root/chunk-cqa9hrgx.js";import{Vd}from"/$bunfs/root/chunk-4vsz8a99.js";import{TVe}from"/$bunfs/root/chunk-4gzm04h3.js";import{Q1s}from"/$bunfs/root/chunk-b18a27zs.js";var $1e="repo_rules_unread";function W5l(e,o){let t=TVe(e,o.meta);return t instanceof Promise?t.then((r)=>s(r,o)):s(t,o)}function s(e,o){if(e.refused!==void 0)return(e.refused.cause==="repo_rules_read_failed"?m:l)("mcp_serve_file_call",e.refused.cause),$1e;return e.repoRules===void 0?o.launchPermissionContext:n(o.launchPermissionContext,e.repoRules,o)}function n(e,o,{session:t}){let r=e??Vd();return{...r,...Q1s({alwaysDenyRules:{},alwaysAskRules:{}},r,Rs(t).originalCwd,o,"upload")}}
export{$1e,W5l};
