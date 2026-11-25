// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{W6n}from"/$bunfs/root/chunk-qk25vh5t.js";import{n2,CFe}from"/$bunfs/root/chunk-m417dzmj.js";import{jr}from"/$bunfs/root/chunk-w1d7ygsk.js";var mYs={};jr(mYs,{default:()=>mYs,endsInARowOf:()=>TGl,unsettledBy:()=>jVo,workerEndingOf:()=>CGl});function TGl(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var jVo=(e)=>({reason:`Error: ${d(e)}`,kind:e instanceof W6n?"passing":"lasting"});var o=5,m=`It did not pass in ${o} tries`,p="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",a=`${m}: ${p}. ${t}`;function CGl(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?a:t;return s?{code:CFe,said:`${e.reason}
`}:{code:n2,said:`${e.reason}
${i}
`}}export{TGl,jVo,CGl,mYs};
