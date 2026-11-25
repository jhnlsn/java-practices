// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ye}from"/$bunfs/root/chunk-pxy9yt8m.js";import{en}from"/$bunfs/root/chunk-jngxzq9c.js";import{S_,gsn,qie}from"/$bunfs/root/chunk-tsby2qjm.js";function i(){return c(qie(gsn(),"globalConfig"),en("userSettings")?qie(ye("userSettings")?.env,"userSettings"):{},qie(ye("flagSettings")?.env,"flagSettings"),qie(ye("policySettings")?.env,"policySettings"))}function $Nt(){return g(S_(),i())}function g(s,n){let r=new Set(Object.keys(n).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in n)&&r.has(e.toUpperCase()))delete t[e];return Object.assign(t,n)}function c(...s){let n=new Map;for(let t of s)for(let[e,o]of Object.entries(t))n.set(e.toUpperCase(),{key:e,value:o});let r={};for(let{key:t,value:e}of n.values())r[t]=e;return r}
export{$Nt};
