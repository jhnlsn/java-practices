// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{rt}from"/$bunfs/root/chunk-pwxp2pn6.js";import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{n,O,c,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var t=p(()=>c({server:n().min(1),tool:n().min(1),askHost:O().optional()}));function q8(){let e=s.CLAUDE_CODE_WEBFETCH_MCP_TOOL;if(!e)return;return t().safeParse(rt(e,!1)).data??"unreadable"}function nao(){let e=q8();if(typeof e!=="object")return[];return["web_fetch_mcp_tool_v1",...e.askHost?["web_fetch_mcp_tool_ask_host_v1"]:[]]}
export{q8,nao};
