// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ke,ge}from"/$bunfs/root/chunk-865at33z.js";import{u,l}from"/$bunfs/root/chunk-cqa9hrgx.js";import{K2i,q2i}from"/$bunfs/root/chunk-2nv4wrez.js";function n6r(e){let r=q2i(e);if(r===null){l("feedback_refusal_memory","no_principal");return}u("feedback_refusal_memory"),Ke((o)=>({...o,feedbackRefusedByServer:r}))}function TCa(){let e=ge().feedbackRefusedByServer;if(typeof e?.principal==="string"&&typeof e.at==="number")K2i(e)}
export{n6r,TCa};
