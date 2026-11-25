// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{wJ,Gaa}from"/$bunfs/root/chunk-f9x2f6cx.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{HWn,fEl}from"/$bunfs/root/chunk-xfr8663h.js";import{Del,QEi}from"/$bunfs/root/chunk-p78dm83c.js";function y(t){return t.length>0&&t.every((e)=>e==="prometheus")}async function hCa(t,e){let{initializeTelemetry:s}=await import("/$bunfs/root/chunk-ezcqffvw.js"),{meter:r,metricsExporterKinds:a}=await s(t,e);if(r){Del(r,(u,m)=>{let c=r?.createCounter(u,m);return{add(d,p={}){let l={...HWn(),...p};c?.add(d,l)}}},{omitUnits:y(a)});let o=QEi();if(o&&!wJ())await n(o)}}function gCa(){let t=QEi();if(t)n(t).catch(i)}async function n(t){await fEl(),t.add(1,{start_type:Gaa()})}
export{hCa,gCa};
