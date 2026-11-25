// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Nf}from"/$bunfs/root/chunk-wtm85h0y.js";function U0a(t){if(Nf())return;return t.remoteSessionName??t.standaloneAgentContext?.name}function gtt(t,e){let n=t.standaloneAgentContext;if(!Object.keys(e).some((o)=>n?.[o]!==e[o]))return t;return{...t,standaloneAgentContext:{...n,name:n?.name??"",...e}}}
export{U0a,gtt};
