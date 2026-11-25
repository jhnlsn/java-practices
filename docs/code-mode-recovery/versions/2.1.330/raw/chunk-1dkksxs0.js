// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{gte}from"/$bunfs/root/chunk-f9x2f6cx.js";import{b,yoe}from"/$bunfs/root/chunk-865at33z.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{Ac,Ooe}from"/$bunfs/root/chunk-4x1jja6d.js";import{vWe,Wvi}from"/$bunfs/root/chunk-02cqsykt.js";var t=300000;function gdo(){return s.CLAUDE_CODE_BRIEF||yoe("tengu_kairos_brief",!1,t)}function GQl(e){if(!e.includes(Ac)&&!e.includes(Ooe))return!1;if(vWe())return!1;return gdo()}function Ax(){return gte()&&gdo()||Wvi()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Ac} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function zQl(){let e=b("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{gdo,GQl,Ax,zQl};
