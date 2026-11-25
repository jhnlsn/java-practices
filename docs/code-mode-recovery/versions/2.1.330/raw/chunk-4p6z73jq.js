// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{vt,kv}from"/$bunfs/root/chunk-2yx6c1y2.js";import{wo,DGn,aI,nke,hCt,qd}from"/$bunfs/root/chunk-865at33z.js";function A5r(){let e=kv("model"),t=e==="policySettings"||e==="flagSettings"?vt().model:hCt()?.model??vt().model,i=s.ANTHROPIC_MODEL||t||nke()||void 0;return i&&tZs(i,"persisted")||qd()}function tZs(e,t){if(!wo(e))return aI(e)??void 0;return DGn(e,t)?void 0:e}
export{A5r,tZs};
