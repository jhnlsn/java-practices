// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{cn}from"/$bunfs/root/chunk-ephf358x.js";import{Ign}from"/$bunfs/root/chunk-xcgcdx61.js";import{e1n}from"/$bunfs/root/chunk-m0xr8k74.js";var i=128;function n(o){return Ign(o)&&o.length<=i}var ont="allow_connector_file_uploads";function ssi(o){if(!n(o))return;let{MCP_PROXY_URL:t,MCP_PROXY_PATH:r}=cn(),e=r.replace("{server_id}",o);return{host:"mcp-proxy",pathPrefix:`${e.replace(/\/$/,"")}${e1n}`,mcpAddress:`${t}${e}`,policy:ont}}var h8o=523239424;
export{ont,ssi,h8o};
