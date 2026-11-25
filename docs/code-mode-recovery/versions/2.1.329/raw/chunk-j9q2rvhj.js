// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N3r,cmt}from"/$bunfs/root/chunk-hg1yqkjk.js";function _7n(e,n){return{targets:e.filter((t)=>N3r(t,n)),outOfBandNote:cmt(e,!0,n)}}async function y7n(e,n){let t=await Promise.allSettled(e.map((o)=>n(o.name))),r=0;for(let o of t)if(o.status==="fulfilled"&&o.value.client.type==="connected")r++;return{results:t,connected:r}}
export{_7n,y7n};
