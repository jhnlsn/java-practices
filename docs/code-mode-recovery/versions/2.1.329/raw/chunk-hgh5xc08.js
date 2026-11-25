// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_e,xt,y,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function Vc(t,o){let[e]=y(()=>({value:r(t)?t():t,sets:0})),[S,i]=y(()=>({...e})),s=o?o(S.value):S.value;if(!Object.is(s,S.value))i({...S,value:s});xt(()=>{if(S.sets===e.sets)e.value=s});let v=_e((u)=>{let a=l(u)?u(e.value):u;if(Object.is(a,e.value))return;e.value=a,e.sets++,i({...e})},[e]),n=_e(()=>e.value,[e]);return[s,v,n]}function r(t){return typeof t==="function"}function l(t){return typeof t==="function"}
export{Vc};
