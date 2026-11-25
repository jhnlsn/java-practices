// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";var s=new j(()=>({}));async function JWe(n,t){let{turns:e}=s.of(N().host);return e===void 0?n.map((i)=>t(i)):e.mapInTurns(n,t)}function Pfo(n,t){let{turns:e}=s.of(N().host);return e?.startListing===void 0?t():e.startListing(n,t)}
export{JWe,Pfo};
