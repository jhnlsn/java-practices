// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Yl}from"/$bunfs/root/chunk-865at33z.js";import{de}from"/$bunfs/root/chunk-t57w17k7.js";var V8s=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=Yl();return{setPromptMentionRunner:o.set,runPromptMention:(e)=>{let r=o.get();return r?r(e):e.read(e.raised,"unhooked").then(()=>V8s)}}}var t=de(m(),(o)=>o.setPromptMentionRunner(null));var EGl=t.runPromptMention;var vGl=t.setPromptMentionRunner;export{V8s,EGl,vGl};
