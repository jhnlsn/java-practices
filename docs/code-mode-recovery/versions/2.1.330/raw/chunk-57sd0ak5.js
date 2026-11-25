// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{pEe,lh,is}from"/$bunfs/root/chunk-xcgcdx61.js";import{_e}from"/$bunfs/root/chunk-2yx6c1y2.js";function Dl(n){let t=_e("policySettings")?.strictPluginOnlyCustomization;if(t===!0)return!0;if(Array.isArray(t))return t.includes(n);return!1}var e=new Set(["plugin","policySettings","built-in","builtin","bundled"]);function FU(n){return n!==void 0&&e.has(n)}function Ure(n,{source:t,plugin:i}){if(t==="plugin")return is(i??"")===lh&&pEe.some(Dl);return!(FU(t)||t==="flagSettings"||t==="mcp")&&Dl(n)}
export{Dl,FU,Ure};
