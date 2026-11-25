// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{K}from"/$bunfs/root/chunk-5appeerh.js";import{LDa}from"/$bunfs/root/chunk-3ah5kacx.js";import{p6,_0a,y0a,e5r}from"/$bunfs/root/chunk-3nqvc94p.js";var jJs=[1000,2000,3000,4000];async function GJs(e,r,s){if(r>0)await K(e[r-1]??0,s);return!s.aborted}async function jtr(e){let{signal:r}=e,s=e5r(),o=e.retryDelaysMs??jJs,a=!1,i=null;for(let t=0;t<=o.length;t++){if(!await GJs(o,t,r))break;try{return await y0a(e.projectId,{body:LDa(e.message,e.sourceSessionId),clientMessageId:s},r,e.credentials),{outcome:"sent"}}catch(n){if(i=n,a||=!_0a(n),r.aborted||!p6(n))break}}return{outcome:a?"uncertain":"not_sent",failure:i}}
export{jJs,GJs,jtr};
