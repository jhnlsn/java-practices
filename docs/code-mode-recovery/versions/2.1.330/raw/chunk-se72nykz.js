// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{$ce}from"/$bunfs/root/chunk-69qhefwa.js";function Xj(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function MIr(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function cOo(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:MIr(t.setState),subscribe:t.subscribe}}function qXe(t,e,r){return{get:()=>t()[r],set:Xj(e,r)}}function EVt(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function uOo(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function ps(t,e){let r=t,S=new Set,a=e&&$ce(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=$ce(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{Xj,MIr,cOo,qXe,EVt,uOo,ps};
