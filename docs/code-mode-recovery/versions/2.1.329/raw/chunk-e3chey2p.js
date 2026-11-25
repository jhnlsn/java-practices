// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{K}from"/$bunfs/root/chunk-q3pjyhpy.js";import{$r,Eu}from"/$bunfs/root/chunk-be81kym3.js";import{rl}from"/$bunfs/root/chunk-mxsnk3xz.js";import{Pfe}from"/$bunfs/root/chunk-czax1965.js";function Ais(o,e){if(o.type!=="pending")return!1;let n=$r(o.name);return!e.some((t)=>Eu(t,o.name,n))}async function Ris(o,e,n){let{maxWaitMs:t,until:s}=n,i=(r)=>r.clients.some((p)=>e(p,r));if(!i(o()))return;let c=Date.now()+t;while(Date.now()<c){await K(50);let r=o();if(s?.(r)||!i(r))return}}function uvi(o){return o.some(A3e)}function A3e(o){return"role"in o.config&&o.config.role==="comms"}function Atn(o){return o.mcpInfo?.role==="comms"}function R3e(o){if(rl())return o.filter((e)=>!Atn(e));return o}async function oFt(o){if(!rl())return;await Ris(o,(e,n)=>Ais(e,n.tools)&&!A3e(e),{maxWaitMs:Pfe})}
export{Ais,Ris,uvi,A3e,Atn,R3e,oFt};
