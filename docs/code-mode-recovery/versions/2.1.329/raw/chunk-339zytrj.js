// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{uN}from"/$bunfs/root/chunk-ht6e56zb.js";import{Wk,Vt}from"/$bunfs/root/chunk-aq3ms068.js";import{E2,dSe}from"/$bunfs/root/chunk-xvh0qanc.js";import{Jh,H5e}from"/$bunfs/root/chunk-q9rzh92c.js";import{bWr,L8n,mFe}from"/$bunfs/root/chunk-zd5rpskm.js";async function F2l(r,t){let e=r.trim(),o=t.getAppState(),a=Vt(o.mainLoopModelForSession??o.mainLoopModel??Wk());if(uN.includes(e))return{type:"text",value:bWr()};if(e==="current"||e==="status"){let{message:s}=L8n(Jh(t),a,o.ultracode);return{type:"text",value:s}}if(!e)return{type:"text",value:`Usage: /effort <${dSe(a).join("|")}|auto${E2(a)?"|ultracode [on|off]":""}>`};return{type:"text",value:await C$o(e,t,"noninteractive")}}async function C$o(r,t,e){return(await mFe(r,{effort:Jh(t),ultracode:H5e(t),route:e},t.setAppState,!t.options.isNonInteractiveSession,t.storageV5)).message}
export{F2l,C$o};
