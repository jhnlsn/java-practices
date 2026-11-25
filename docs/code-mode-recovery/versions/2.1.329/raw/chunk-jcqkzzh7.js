// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ld}from"/$bunfs/root/chunk-aq3ms068.js";import{de}from"/$bunfs/root/chunk-pb0k2vmd.js";var zzs=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=Ld();return{setPromptMentionRunner:o.set,runPromptMention:(e)=>{let r=o.get();return r?r(e):e.read(e.raised,"unhooked").then(()=>zzs)}}}var t=de(m(),(o)=>o.setPromptMentionRunner(null));var pHl=t.runPromptMention;var mHl=t.setPromptMentionRunner;export{zzs,pHl,mHl};
