// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Es}from"/$bunfs/root/chunk-kgzzwvwc.js";import{m,l}from"/$bunfs/root/chunk-3mgc6ahd.js";import{Td}from"/$bunfs/root/chunk-bxxahqqj.js";import{IGe}from"/$bunfs/root/chunk-ge7qg7kt.js";import{lIs}from"/$bunfs/root/chunk-ynpk6n7b.js";var SNe="repo_rules_unread";function xBl(e,o){let t=IGe(e,o.meta);return t instanceof Promise?t.then((r)=>s(r,o)):s(t,o)}function s(e,o){if(e.refused!==void 0)return(e.refused.cause==="repo_rules_read_failed"?m:l)("mcp_serve_file_call",e.refused.cause),SNe;return e.repoRules===void 0?o.launchPermissionContext:n(o.launchPermissionContext,e.repoRules,o)}function n(e,o,{session:t}){let r=e??Td();return{...r,...lIs({alwaysDenyRules:{},alwaysAskRules:{}},r,Es(t).originalCwd,o,"upload")}}
export{SNe,xBl};
