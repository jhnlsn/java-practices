// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";import{RDt}from"/$bunfs/root/chunk-qh0nzvn2.js";import{Qeo,Qui}from"/$bunfs/root/chunk-bzyb60p0.js";import{M}from"/$bunfs/root/chunk-4smdap7r.js";import{randomUUID as p}from"crypto";function QZs(e){let o=Qui(e,Qeo(e,e));return o===null?e:[...e,n(o)]}function ULa(e,o){let r=s(e),a=M([...r.ended??[],...o]);return[...e,n(a.length>0?{...r,ended:a}:r)]}var I3o=(e)=>n(s(e)),s=(e)=>Qui(e,Qeo(e,e))??{type:"session_cron_carry",tasks:[]};function BLa(e){return RDt.subscribe(()=>{try{e.append(I3o(e.getSnapshot()))}catch(o){t(`[loop] cancel note not written: ${o instanceof Error?o.name:"unknown"}`,{level:"error"})}})}var n=(e)=>({attachment:e,type:"attachment",uuid:p(),timestamp:new Date().toISOString()});
export{QZs,ULa,I3o,BLa};
