// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ee}from"/$bunfs/root/chunk-7cfjrnwy.js";import{Ek}from"/$bunfs/root/chunk-kx2fp6pc.js";import{jl}from"/$bunfs/root/chunk-xcgcdx61.js";import{oJ}from"/$bunfs/root/chunk-3f4m74y6.js";var r=128;function E7r(n){let e="displayName"in n?n.displayName:void 0;if(typeof e!=="string")return;if(n.scope==="claudeai")return e;if(n.scope!=="dynamic"||jl(n))return;return ee(Ek(e),r).trimEnd()||void 0}function v7r(n,e){if(n.type!=="claudeai-proxy")return e;let i=e.startsWith(oJ)?e.slice(oJ.length):n.displayName;return i?.trim()?i:e}
export{E7r,v7r};
