// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ll}from"/$bunfs/root/chunk-epy4sc29.js";import{l0t}from"/$bunfs/root/chunk-2qh29p4b.js";import{gt}from"/$bunfs/root/chunk-4vsz8a99.js";import{lr}from"/$bunfs/root/chunk-px0hhsq7.js";import{QQ}from"/$bunfs/root/chunk-g78kc1rr.js";function RYt(f,t,i,m){let e=l0t(t);if(e===null||!QQ(e)||t.some((n)=>n!==e&&n.name===e.name))return;let c=lr(Ll,m),r=f.filter((n)=>gt(n,c)),o=r[0]?.mcpInfo;return r.length!==1||i!==void 0&&Object.hasOwn(i,c)||o?.serverName!==e.name||o.toolName!==m||o.scope!==e.config.scope||o.serverType!==e.config.type||o.hiddenFromModel===!0?void 0:r[0]}
export{RYt};
