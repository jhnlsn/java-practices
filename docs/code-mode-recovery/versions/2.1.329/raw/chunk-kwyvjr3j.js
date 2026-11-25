// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Tm,Qx}from"/$bunfs/root/chunk-aq3ms068.js";import{$m}from"/$bunfs/root/chunk-4ch99na2.js";function o(e){let t=Tm(e);return t===Tm("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${Qx(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${Tm(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function t2r(e,t){return(i,n)=>{t?.(s(e,i,n))}}function rQe(e,t){return(i,n)=>{t?.($m(r(e,i,n),"warning"))}}
export{t2r,rQe};
