// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{AXn}from"/$bunfs/root/chunk-axgpttnq.js";import{l8r,Vti}from"/$bunfs/root/chunk-hg1yqkjk.js";import{M}from"/$bunfs/root/chunk-b8e2yqms.js";import{randomUUID as p}from"crypto";function x3s(e){let o=Vti(e,l8r(e,e));return o===null?e:[...e,n(o)]}function ACa(e,o){let r=s(e),a=M([...r.ended??[],...o]);return[...e,n(a.length>0?{...r,ended:a}:r)]}var c2o=(e)=>n(s(e)),s=(e)=>Vti(e,l8r(e,e))??{type:"session_cron_carry",tasks:[]};function RCa(e){return AXn.subscribe(()=>{try{e.append(c2o(e.getSnapshot()))}catch(o){t(`[loop] cancel note not written: ${o instanceof Error?o.name:"unknown"}`,{level:"error"})}})}var n=(e)=>({attachment:e,type:"attachment",uuid:p(),timestamp:new Date().toISOString()});
export{x3s,ACa,c2o,RCa};
