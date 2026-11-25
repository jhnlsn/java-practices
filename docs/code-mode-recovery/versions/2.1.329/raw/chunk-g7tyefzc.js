// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ewe,Xm,es}from"/$bunfs/root/chunk-t39fw2cy.js";import{ye}from"/$bunfs/root/chunk-pxy9yt8m.js";function zl(n){let t=ye("policySettings")?.strictPluginOnlyCustomization;if(t===!0)return!0;if(Array.isArray(t))return t.includes(n);return!1}var e=new Set(["plugin","policySettings","built-in","builtin","bundled"]);function r6(n){return n!==void 0&&e.has(n)}function SSe(n,{source:t,plugin:i}){if(t==="plugin")return es(i??"")===Xm&&ewe.some(zl);return!(r6(t)||t==="flagSettings"||t==="mcp")&&zl(n)}
export{zl,r6,SSe};
