// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Zle}from"/$bunfs/root/chunk-cqahc80t.js";function BW(t,e){return(r)=>t((S)=>c(S,e,S[e],r(S[e])))}function iTr(t){return(e)=>t((r)=>{let S=e(r);return Object.is(S,r)?r:{...r,...S}})}function Yko(t){return{getSnapshot:t.getSnapshot,getState:t.getState,setState:iTr(t.setState),subscribe:t.subscribe}}function Y8e(t,e,r){return{get:()=>t()[r],set:BW(e,r)}}function Njt(t,e){return(r,S)=>({get:()=>r()[t]??e,set:(a)=>S((s)=>{let n=s[t]??e;return c(s,t,n,a(n))})})}function Xko(t){let e=t;return{get:()=>e,set:(r)=>{e=r(e)}}}function ms(t,e){let r=t,S=new Set,a=e&&Zle(e),s=()=>r;return{getSnapshot:s,getState:s,setState:(n)=>{let o=r,i=n(o);if(Object.is(i,o))return;r=i,a?.({newState:i,oldState:o});for(let u of S)u()},subscribe:(n)=>{let o=Zle(n);return S.add(o),()=>S.delete(o)}}}function c(t,e,r,S){return Object.is(S,r)?t:{...t,[e]:S}}
export{BW,iTr,Yko,Y8e,Njt,Xko,ms};
