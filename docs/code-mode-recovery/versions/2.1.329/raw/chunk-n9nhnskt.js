// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ke,me}from"/$bunfs/root/chunk-aq3ms068.js";import{f,l}from"/$bunfs/root/chunk-3mgc6ahd.js";import{wDi,kDi}from"/$bunfs/root/chunk-dt01kn47.js";function gUr(e){let r=kDi(e);if(r===null){l("feedback_refusal_memory","no_principal");return}f("feedback_refusal_memory"),Ke((o)=>({...o,feedbackRefusedByServer:r}))}function uha(){let e=me().feedbackRefusedByServer;if(typeof e?.principal==="string"&&typeof e.at==="number")wDi(e)}
export{gUr,uha};
