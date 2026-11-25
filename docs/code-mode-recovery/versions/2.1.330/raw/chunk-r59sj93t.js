// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Hf,Lu}from"/$bunfs/root/chunk-9e5mdyfk.js";import{Rk}from"/$bunfs/root/chunk-5h9h52az.js";function cue(e,t){let n=e.trimStart();return Rk(n)!=="prompt"||n.startsWith("/")||t?.tempo==="blocked"&&(t.block?.questions.length??0)>0}function z8t(e){return e.queuedPrompt!==void 0&&cue(e.queuedPrompt,null)?void 0:e.queuedPrompt}function tqs(e,t){return e===t||e.endsWith(`

${t}`)}async function O_e(e,t,n,o,u){if(cue(n,null))return!1;let r=u?z8t(t):void 0;return Hf(e,{...t,queuedPrompt:!r?n:tqs(r,n)?r:`${r}

${n}`,updatedAt:new Date().toISOString()},o).then(()=>!0,(i)=>(Lu(i),!1))}
export{cue,z8t,tqs,O_e};
