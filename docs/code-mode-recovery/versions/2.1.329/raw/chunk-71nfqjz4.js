// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{m}from"/$bunfs/root/chunk-3mgc6ahd.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";var eAi={load:null};function Crl(a){let e=a.call;a.call=async(...n)=>{let r=Date.now(),l=await e.apply(a,n),[c,d]=n;try{let t=eAi.load?.()??null;if(t===null)return m("artifact_mcp_read_file_landing","no_loader"),l;let o=await t(a,c,d,l.data,r);return o===null?l:{...l,data:o}}catch(t){return m("artifact_mcp_read_file_landing","threw"),i(t),l}}}
export{eAi,Crl};
