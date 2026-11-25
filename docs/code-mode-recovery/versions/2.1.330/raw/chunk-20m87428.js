// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_e}from"/$bunfs/root/chunk-2yx6c1y2.js";import{rn}from"/$bunfs/root/chunk-xzvhvaa2.js";import{n_,Vcn,Gle}from"/$bunfs/root/chunk-5e3gtsn9.js";function i(){return c(Gle(Vcn(),"globalConfig"),rn("userSettings")?Gle(_e("userSettings")?.env,"userSettings"):{},Gle(_e("flagSettings")?.env,"flagSettings"),Gle(_e("policySettings")?.env,"policySettings"))}function _Bt(){return g(n_(),i())}function g(s,n){let r=new Set(Object.keys(n).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in n)&&r.has(e.toUpperCase()))delete t[e];return Object.assign(t,n)}function c(...s){let n=new Map;for(let t of s)for(let[e,o]of Object.entries(t))n.set(e.toUpperCase(),{key:e,value:o});let r={};for(let{key:t,value:e}of n.values())r[t]=e;return r}
export{_Bt};
