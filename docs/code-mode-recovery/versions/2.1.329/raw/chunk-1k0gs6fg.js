// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{K}from"/$bunfs/root/chunk-q3pjyhpy.js";import{wva}from"/$bunfs/root/chunk-rf3r4n5k.js";import{zG,nTa,rTa,aGr}from"/$bunfs/root/chunk-m086wc89.js";var _qs=[1000,2000,3000,4000];async function yqs(e,r,s){if(r>0)await K(e[r-1]??0,s);return!s.aborted}async function i7n(e){let{signal:r}=e,s=aGr(),o=e.retryDelaysMs??_qs,a=!1,i=null;for(let t=0;t<=o.length;t++){if(!await yqs(o,t,r))break;try{return await rTa(e.projectId,{body:wva(e.message,e.sourceSessionId),clientMessageId:s},r,e.credentials),{outcome:"sent"}}catch(n){if(i=n,a||=!nTa(n),r.aborted||!zG(n))break}}return{outcome:a?"uncertain":"not_sent",failure:i}}
export{_qs,yqs,i7n};
