// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{Go}from"/$bunfs/root/chunk-bzyb60p0.js";import{n,ie,C,c,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var eRa="Resumed agent. Its final report is not in this message.",tRa="Resumed agent. Its final report follows this JSON, framed by the harness.",nRa="Agent was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report is not in this message.",rRa="Agent was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report, read from its saved transcript, follows this JSON, framed by the harness.";function J4s({displayName:e,content:t,stored:s}){let r=Go(t,`
`)||"(no text output)";return s?`Agent ${e} was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report, read from its saved transcript:

${r}`:`Resumed agent ${e}. Result:

${r}`}var Q4s=p(()=>c({message:n().optional(),display:n().optional(),inlineHandback:c({displayName:n(),content:C(c({type:v("text"),text:n()})),stored:v(!0).optional()}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function Z4s(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?J4s(e.inlineHandback):e.message)}function oRa(e){let t=Q4s().safeParse(e);return t.success?Z4s(t.data)??"":""}
export{eRa,tRa,nRa,rRa,J4s,Q4s,Z4s,oRa};
