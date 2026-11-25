// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{K}from"/$bunfs/root/chunk-5appeerh.js";import{Rr,Bu}from"/$bunfs/root/chunk-px0hhsq7.js";import{dl}from"/$bunfs/root/chunk-c4zg4pwc.js";import{Ame}from"/$bunfs/root/chunk-98tkmkvx.js";function ehs(o,e){if(o.type!=="pending")return!1;let n=Rr(o.name);return!e.some((t)=>Bu(t,o.name,n))}async function ths(o,e,n){let{maxWaitMs:t,until:s}=n,i=(r)=>r.clients.some((p)=>e(p,r));if(!i(o()))return;let c=Date.now()+t;while(Date.now()<c){await K(50);let r=o();if(s?.(r)||!i(r))return}}function FMi(o){return o.some(p8e)}function p8e(o){return"role"in o.config&&o.config.role==="comms"}function Bin(o){return o.mcpInfo?.role==="comms"}function m8e(o){if(dl())return o.filter((e)=>!Bin(e));return o}async function EBt(o){if(!dl())return;await ths(o,(e,n)=>ehs(e,n.tools)&&!p8e(e),{maxWaitMs:Ame})}
export{ehs,ths,FMi,p8e,Bin,m8e,EBt};
