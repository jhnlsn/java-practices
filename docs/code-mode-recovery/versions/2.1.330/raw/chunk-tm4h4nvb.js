// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xQr,j_t}from"/$bunfs/root/chunk-bzyb60p0.js";function enr(e,n){return{targets:e.filter((t)=>xQr(t,n)),outOfBandNote:j_t(e,!0,n)}}async function tnr(e,n){let t=await Promise.allSettled(e.map((o)=>n(o.name))),r=0;for(let o of t)if(o.status==="fulfilled"&&o.value.client.type==="connected")r++;return{results:t,connected:r}}
export{enr,tnr};
