// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ss}from"/$bunfs/root/chunk-hg1yqkjk.js";import{n,ae,C,c,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var Oga="Resumed agent. Its final report is not in this message.",Iga="Resumed agent. Its final report follows this JSON, framed by the harness.",Mga="Agent was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report is not in this message.",Hga="Agent was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report, read from its saved transcript, follows this JSON, framed by the harness.";function HWs({displayName:e,content:t,stored:s}){let r=ss(t,`
`)||"(no text output)";return s?`Agent ${e} was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report, read from its saved transcript:

${r}`:`Resumed agent ${e}. Result:

${r}`}var DWs=p(()=>c({message:n().optional(),display:n().optional(),inlineHandback:c({displayName:n(),content:C(c({type:v("text"),text:n()})),stored:v(!0).optional()}).optional().catch(void 0),routing:ae().optional(),request_id:ae().optional(),target:ae().optional()}));function LWs(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?HWs(e.inlineHandback):e.message)}function Dga(e){let t=DWs().safeParse(e);return t.success?LWs(t.data)??"":""}
export{Oga,Iga,Mga,Hga,HWs,DWs,LWs,Dga};
