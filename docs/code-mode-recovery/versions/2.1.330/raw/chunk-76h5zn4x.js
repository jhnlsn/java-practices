// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ll}from"/$bunfs/root/chunk-epy4sc29.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{lr,yqt}from"/$bunfs/root/chunk-px0hhsq7.js";var r=/^[a-zA-Z0-9_-]{1,64}$/;function Hjr(i,n=Ll){if(!("tools"in i)||i.tools===void 0)return[];if(!Array.isArray(i.tools))return t("[bridge:meta-mcp] meta tools[] is not an array",{level:"warn"}),null;let e=[];for(let o of i.tools){if(o===null||typeof o!=="object"||!("name"in o)||typeof o.name!=="string"||!r.test(o.name))return t("[bridge:meta-mcp] injected tools[] entry is malformed",{level:"warn"}),null;e.push({name:o.name,..."permission_policy"in o&&typeof o.permission_policy==="string"&&{permission_policy:o.permission_policy}})}let{allow:s}=yqt({[n]:{type:"http",tools:e}}),l=lr(n,"");return s.map((o)=>o.startsWith(l)?o.slice(l.length):o)}
export{Hjr};
