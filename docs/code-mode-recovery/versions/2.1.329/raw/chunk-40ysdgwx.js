// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{MZ,rJi}from"/$bunfs/root/chunk-kgzzwvwc.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{hNn,Eul}from"/$bunfs/root/chunk-4je1pw3n.js";import{P4a,Vpi}from"/$bunfs/root/chunk-smchpx50.js";function y(t){return t.length>0&&t.every((e)=>e==="prometheus")}async function tha(t,e){let{initializeTelemetry:s}=await import("/$bunfs/root/chunk-prrpw8cm.js"),{meter:r,metricsExporterKinds:a}=await s(t,e);if(r){P4a(r,(u,m)=>{let c=r?.createCounter(u,m);return{add(d,p={}){let l={...hNn(),...p};c?.add(d,l)}}},{omitUnits:y(a)});let o=Vpi();if(o&&!MZ())await n(o)}}function nha(){let t=Vpi();if(t)n(t).catch(i)}async function n(t){await Eul(),t.add(1,{start_type:rJi()})}
export{tha,nha};
