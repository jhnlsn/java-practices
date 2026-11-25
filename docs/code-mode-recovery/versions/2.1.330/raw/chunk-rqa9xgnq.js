// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Be}from"/$bunfs/root/chunk-69qhefwa.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";function u(){let r=Be(),e=new Map,o=0;return{emit(i,s){if(o===0){e.set(i,s);return}r.emit(i,s)},subscribe(i){o++;let s=[...e];e.clear();for(let[g,l]of s)i(g,l);let c=r.subscribe(i),n=!0;return()=>{if(n)n=!1,o--,c()}}}}var g1o=new ze(u),fbn="device-mcp-not-now";function lUr(r){return(e,o)=>{t(`[remote-tools] ${e}: ${o}`),g1o.of(r).emit(e,o)}}
export{g1o,fbn,lUr};
