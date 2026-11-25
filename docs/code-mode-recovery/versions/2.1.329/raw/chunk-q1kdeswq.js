// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Qt}from"/$bunfs/root/chunk-bxxahqqj.js";import{vat}from"/$bunfs/root/chunk-qb0dm7yx.js";function Qxt(s,r){let{tools:n,toolAliases:i}=s,t=n.filter((e)=>e.mcpInfo?.serverName===vat&&e.mcpInfo.toolName===r&&e.mcpInfo.serverType==="sdk"),o=t.length===1?t[0]:void 0;if(!o||Qt(n,o.name,i)!==o)return;return o}
export{Qxt};
