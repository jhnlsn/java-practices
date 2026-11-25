// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{m}from"/$bunfs/root/chunk-cqa9hrgx.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";var r1i={load:null};function Xgl(a){let e=a.call;a.call=async(...n)=>{let r=Date.now(),l=await e.apply(a,n),[c,d]=n;try{let t=r1i.load?.()??null;if(t===null)return m("artifact_mcp_read_file_landing","no_loader"),l;let o=await t(a,c,d,l.data,r);return o===null?l:{...l,data:o}}catch(t){return m("artifact_mcp_read_file_landing","threw"),i(t),l}}}
export{r1i,Xgl};
