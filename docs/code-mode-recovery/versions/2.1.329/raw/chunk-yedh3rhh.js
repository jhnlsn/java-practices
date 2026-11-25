// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Kn}from"/$bunfs/root/chunk-k936fbc4.js";import{gLe}from"/$bunfs/root/chunk-t39fw2cy.js";function lOs(t,n){let e=Kn(t),r=n.map(Kn).sort(),s=gLe(e,r.map((d)=>({name:d})),{maxEditDistance:2});if(s)return`No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;if(r.length===0)return`No MCP server named "${e}". Run \`claude mcp add\` to add one.`;let o=8,a=r.slice(0,o).join(", "),i=r.length>o?` (and ${r.length-o} more \u2014 run \`claude mcp list\` to see all)`:"";return`No MCP server named "${e}". Configured servers: ${a}${i}`}function MIr(t,n,e){if(e&&n.length===0)return`No MCP server named "${Kn(t)}". ${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."}`;return lOs(t,n)+(e?` (${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."})`:"")}
export{lOs,MIr};
