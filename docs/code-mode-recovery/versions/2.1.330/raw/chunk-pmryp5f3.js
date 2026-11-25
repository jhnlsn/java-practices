// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xWn}from"/$bunfs/root/chunk-hy0sycbj.js";import{M}from"/$bunfs/root/chunk-4smdap7r.js";function yLe(e){let r=e.strippedDangerousRules;if(e.alwaysAllowRules.command===void 0&&r?.command===void 0&&e.connectorCardAllows===void 0)return e;return{...e,alwaysAllowRules:{...e.alwaysAllowRules,command:void 0},...r&&{strippedDangerousRules:{...r,command:void 0}},...e.connectorCardAllows&&{connectorCardAllows:void 0}}}function Pcn(e){let r=yLe(e);return r.pollEventDeliveryGuard===!0?r:{...r,pollEventDeliveryGuard:!0}}function JWi(e,r){if(r.length===0)return e;return{...e,alwaysAllowRules:{...e.alwaysAllowRules,command:M([...e.alwaysAllowRules.command||[],...r])}}}function QWi(e,r){if(r.length===0)return e;return{...e,alwaysDenyRules:{...e.alwaysDenyRules,command:M([...e.alwaysDenyRules.command||[],...r])}}}function Ocn(e,r,o,n){if(!n?.replaceCommandRules&&!n?.replaceDenyRules&&n?.frozenCommandDenies===void 0&&r.length===0&&o.length===0)return e;return()=>{let a=e(),i=typeof n?.replaceCommandRules==="function"?n.replaceCommandRules():n?.replaceCommandRules,s=a.toolPermissionContext.pollEventDeliveryGuard===!0?a.toolPermissionContext:i?{...a.toolPermissionContext,alwaysAllowRules:{...a.toolPermissionContext.alwaysAllowRules,command:r}}:JWi(a.toolPermissionContext,r),t=n?.replaceDenyRules?{...s,alwaysDenyRules:{...s.alwaysDenyRules,command:[...o,...s.turnDisallowedTools??[]]}}:n?.frozenCommandDenies!==void 0?{...s,alwaysDenyRules:{...s.alwaysDenyRules,command:M([...n.frozenCommandDenies,...s.alwaysDenyRules.command??[],...o])}}:QWi(s,o);return{...a,toolPermissionContext:t}}}function Icn(e){let r=e.indexOf(":");if(r<=0)return;let o=e.slice(r+1);return o.endsWith("/SKILL.md")&&/^[A-Za-z][A-Za-z0-9+.-]*:./.test(o)?{server:e.slice(0,r),uri:o}:void 0}function aTr(e){return(e.denyMatchNames??[]).filter((r)=>r.includes(":"))}function Rkl(e,r){let o;return e.map((n)=>{if(n.loadedFrom!=="mcp")return n;let a=aTr(n);if(a.length===0)return n;o??=new Set([...r.map((t)=>t.name),...e.map((t)=>t.name)]);let i=a.filter((t)=>t!==n.name&&o.has(t)),s=n.reservedLabels??[];if(i.length===s.length&&i.every((t,l)=>t===s[l]))return n;return{...n,reservedLabels:i.length===0?void 0:i}})}var Fn="Skill",S1="skill__",ZWi=["Base directory for this skill: ",'This skill is served by MCP server "'],Dws=`${ZWi[0]}none given on this line

`;function lTr(e){return typeof e==="string"&&e.startsWith(Dws)?e.slice(Dws.length):e}function tlt(e){return S1+e.replaceAll(":","__").replace(/[^a-zA-Z0-9_-]/g,"_")}function xkl(e){let r=[...e.aliases??[],...e.shedAliases??[],...e.unqualifiedName!=null?[e.unqualifiedName]:[],...aTr(e),...e.directoryListingName!==void 0?[e.directoryListingName]:[]];return r.length?r.map(tlt):void 0}var b1="ReadMcpResourceDirTool",Pkl=`
List the direct children of a directory resource on an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the directory resource

Only usable against a server that has declared support for directory listing. The listing is not recursive.
`,Okl=`
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${xWn}" \u2014 call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;var vu="ReadMcpResourceTool",Ikl=`
Reads a specific resource from an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the resource to read

Usage examples:
- Read a resource from a server: \`readMcpResource({ server: "myserver", uri: "my-resource-uri" })\`
`,Mkl=`
Reads a specific resource from an MCP server, identified by server name and resource URI.

Parameters:
- server (required): The name of the MCP server from which to read the resource
- uri (required): The URI of the resource to read
`;
export{yLe,Pcn,JWi,QWi,Ocn,Icn,aTr,Rkl,Fn,S1,ZWi,Dws,lTr,tlt,xkl,b1,Pkl,Okl,vu,Ikl,Mkl};
