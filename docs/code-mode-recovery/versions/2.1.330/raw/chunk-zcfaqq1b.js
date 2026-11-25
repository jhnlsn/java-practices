// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Cn}from"/$bunfs/root/chunk-f64qna2j.js";import{ir}from"/$bunfs/root/chunk-8bkqeb5d.js";import{ye,Ot,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function ML(c,o,t=1000,i=0,m){let e=ir(),n=()=>Cn(Math.max(0,(m??Date.now())-c-i)),a=ye((l)=>{if(!o)return()=>{};let r,u=()=>{try{l()}finally{r=e.setTimeout(u,t)}};return r=e.setTimeout(u,t),()=>r()},[o,t,e]);return Ot(a,n,n)}
export{ML};
