// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Mm,QP}from"/$bunfs/root/chunk-865at33z.js";import{lp}from"/$bunfs/root/chunk-yta0vzjp.js";function o(e){let t=Mm(e);return t===Mm("")?"(unnamed agent)":t}function r(e,t,i){return`${o(e)} agent: ${QP(t,i)}`}function s(e,t,i){return{type:"notification",notification:{key:`agent-model-restricted-${o(e)}-${Mm(t)}`,text:r(e,t,i),priority:"medium",color:"warning",timeoutMs:1e4}}}function q4r(e,t){return(i,n)=>{t?.(s(e,i,n))}}function ett(e,t){return(i,n)=>{t?.(lp(r(e,i,n),"warning"))}}
export{q4r,ett};
