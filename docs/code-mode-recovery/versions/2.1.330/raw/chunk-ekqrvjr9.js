// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{kr}from"/$bunfs/root/chunk-f9x2f6cx.js";import{_Y}from"/$bunfs/root/chunk-5k07m56e.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";var s1r=new j(()=>({route:void 0}));function Oua({api_base_url:e,session_id:o,session_token:n}){return{address:`${e}/v2/ccr-sessions/${encodeURIComponent(o)}/mcp`,token:()=>kr(_Y).renewedToken??n}}
export{s1r,Oua};
