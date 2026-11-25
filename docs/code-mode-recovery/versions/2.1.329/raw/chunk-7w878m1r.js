// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{HZ}from"/$bunfs/root/chunk-kgzzwvwc.js";import{b,Ane}from"/$bunfs/root/chunk-aq3ms068.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{lf,$De}from"/$bunfs/root/chunk-106tq5ez.js";import{u_t,Lmi}from"/$bunfs/root/chunk-etk0e9ea.js";var t=300000;function Eto(){return s.CLAUDE_CODE_BRIEF||Ane("tengu_kairos_brief",!1,t)}function oVl(e){if(!e.includes(lf)&&!e.includes($De))return!1;if(u_t())return!1;return Eto()}function nU(){return HZ()&&Eto()||Lmi()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${lf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function sVl(){let e=b("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{Eto,oVl,nU,sVl};
