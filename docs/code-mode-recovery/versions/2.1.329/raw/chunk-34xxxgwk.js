// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{$e}from"/$bunfs/root/chunk-cqahc80t.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";function u(){let r=$e(),e=new Map,o=0;return{emit(i,s){if(o===0){e.set(i,s);return}r.emit(i,s)},subscribe(i){o++;let s=[...e];e.clear();for(let[g,l]of s)i(g,l);let c=r.subscribe(i),n=!0;return()=>{if(n)n=!1,o--,c()}}}}var nIo=new qe(u),Tmn="device-mcp-not-now";function L0r(r){return(e,o)=>{t(`[remote-tools] ${e}: ${o}`),nIo.of(r).emit(e,o)}}
export{nIo,Tmn,L0r};
