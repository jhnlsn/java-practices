// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{vf}from"/$bunfs/root/chunk-fw3g4jx2.js";function vTa(t){if(vf())return;return t.remoteSessionName??t.standaloneAgentContext?.name}function SQe(t,e){let n=t.standaloneAgentContext;if(!Object.keys(e).some((o)=>n?.[o]!==e[o]))return t;return{...t,standaloneAgentContext:{...n,name:n?.name??"",...e}}}
export{vTa,SQe};
