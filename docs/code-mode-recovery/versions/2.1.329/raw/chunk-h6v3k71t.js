// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{vBn}from"/$bunfs/root/chunk-80tnx8xx.js";import{VW,lLe}from"/$bunfs/root/chunk-s62pzgeb.js";import{Nr}from"/$bunfs/root/chunk-x3fg13na.js";var Qzs={};Nr(Qzs,{default:()=>Qzs,endsInARowOf:()=>hHl,unsettledBy:()=>b$o,workerEndingOf:()=>gHl});function hHl(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var b$o=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof vBn?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function gHl(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:lLe,said:`${e.reason}
`}:{code:VW,said:`${e.reason}
${i}
`}}export{hHl,b$o,gHl,Qzs};
