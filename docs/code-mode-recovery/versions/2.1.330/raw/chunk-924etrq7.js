// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{jRe}from"/$bunfs/root/chunk-fpcs74d2.js";function $ue(r,s){let o=jRe(r),n=s.map((e)=>e.mcpInfo===void 0||e.mcpInfo.scope===o.scope&&e.mcpInfo.pluginSource===o.pluginSource&&e.mcpInfo.agentSource===o.agentSource&&e.mcpInfo.isBehindGateway===o.isBehindGateway?e:{...e,mcpInfo:o});return n.every((e,p)=>e===s[p])?s:n}
export{$ue};
