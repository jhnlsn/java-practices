// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{kl}from"/$bunfs/root/chunk-jnqtrw4b.js";import{qOt}from"/$bunfs/root/chunk-8zgaf943.js";import{gt}from"/$bunfs/root/chunk-bxxahqqj.js";import{ur}from"/$bunfs/root/chunk-be81kym3.js";import{oJ}from"/$bunfs/root/chunk-g014tndq.js";function A4t(f,t,i,m){let e=qOt(t);if(e===null||!oJ(e)||t.some((n)=>n!==e&&n.name===e.name))return;let c=ur(kl,m),r=f.filter((n)=>gt(n,c)),o=r[0]?.mcpInfo;return r.length!==1||i!==void 0&&Object.hasOwn(i,c)||o?.serverName!==e.name||o.toolName!==m||o.scope!==e.config.scope||o.serverType!==e.config.type||o.hiddenFromModel===!0?void 0:r[0]}
export{A4t};
