// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{bF}from"/$bunfs/root/chunk-k449cc64.js";import{xE,jt}from"/$bunfs/root/chunk-865at33z.js";import{jG,hwe}from"/$bunfs/root/chunk-k67pwqya.js";import{e_,CYe}from"/$bunfs/root/chunk-bz1f2qnq.js";import{sqr,ger,H$e}from"/$bunfs/root/chunk-wtnnmdmx.js";async function h7l(r,t){let e=r.trim(),o=t.getAppState(),a=jt(o.mainLoopModelForSession??o.mainLoopModel??xE());if(bF.includes(e))return{type:"text",value:sqr()};if(e==="current"||e==="status"){let{message:s}=ger(e_(t),a,o.ultracode);return{type:"text",value:s}}if(!e)return{type:"text",value:`Usage: /effort <${hwe(a).join("|")}|auto${jG(a)?"|ultracode [on|off]":""}>`};return{type:"text",value:await YVo(e,t,"noninteractive")}}async function YVo(r,t,e){return(await H$e(r,{effort:e_(t),ultracode:CYe(t),route:e},t.setAppState,!t.options.isNonInteractiveSession,t.storageV5)).message}
export{h7l,YVo};
