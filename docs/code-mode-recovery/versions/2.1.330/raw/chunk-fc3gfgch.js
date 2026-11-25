// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{et}from"/$bunfs/root/chunk-0jve1fep.js";import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{n,P,c,B}from"/$bunfs/root/chunk-adx6804h.js";B();var t=p(()=>c({server:n().min(1),tool:n().min(1),askHost:P().optional()}));function R7(){let e=s.CLAUDE_CODE_WEBFETCH_MCP_TOOL;if(!e)return;return t().safeParse(et(e,!1)).data??"unreadable"}function Sho(){let e=R7();if(typeof e!=="object")return[];return["web_fetch_mcp_tool_v1",...e.askHost?["web_fetch_mcp_tool_ask_host_v1"]:[]]}
export{R7,Sho};
