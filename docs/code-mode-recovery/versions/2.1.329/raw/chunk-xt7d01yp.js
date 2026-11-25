// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{wf,mu}from"/$bunfs/root/chunk-yzxvzrvh.js";import{Qw}from"/$bunfs/root/chunk-b8a7h0f8.js";function Ede(e,t){let n=e.trimStart();return Qw(n)!=="prompt"||n.startsWith("/")||t?.tempo==="blocked"&&(t.block?.questions.length??0)>0}function Vqt(e){return e.queuedPrompt!==void 0&&Ede(e.queuedPrompt,null)?void 0:e.queuedPrompt}function X$s(e,t){return e===t||e.endsWith(`

${t}`)}async function Ahe(e,t,n,o,u){if(Ede(n,null))return!1;let r=u?Vqt(t):void 0;return wf(e,{...t,queuedPrompt:!r?n:X$s(r,n)?r:`${r}

${n}`,updatedAt:new Date().toISOString()},o).then(()=>!0,(i)=>(mu(i),!1))}
export{Ede,Vqt,X$s,Ahe};
