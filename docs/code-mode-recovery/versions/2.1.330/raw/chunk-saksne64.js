// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{tn}from"/$bunfs/root/chunk-4vsz8a99.js";import{Xct}from"/$bunfs/root/chunk-bne5t4g3.js";function JMt(s,r){let{tools:n,toolAliases:i}=s,t=n.filter((e)=>e.mcpInfo?.serverName===Xct&&e.mcpInfo.toolName===r&&e.mcpInfo.serverType==="sdk"),o=t.length===1?t[0]:void 0;if(!o||tn(n,o.name,i)!==o)return;return o}
export{JMt};
