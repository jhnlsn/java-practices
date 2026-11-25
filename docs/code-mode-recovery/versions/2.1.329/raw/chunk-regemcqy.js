// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{cn}from"/$bunfs/root/chunk-3q5b9bqc.js";import{Ycn}from"/$bunfs/root/chunk-t39fw2cy.js";import{zMn}from"/$bunfs/root/chunk-p9p5bfcv.js";var i=128;function n(o){return Ycn(o)&&o.length<=i}var sZe="allow_connector_file_uploads";function UYs(o){if(!n(o))return;let{MCP_PROXY_URL:t,MCP_PROXY_PATH:r}=cn(),e=r.replace("{server_id}",o);return{host:"mcp-proxy",pathPrefix:`${e.replace(/\/$/,"")}${zMn}`,mcpAddress:`${t}${e}`,policy:sZe}}var vzo=523239424;
export{sZe,UYs,vzo};
