// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{zp,GWe,XSe,Y$t}from"/$bunfs/root/chunk-vc58gmrj.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";function QYs(e){return Pe("tengu_harmonic_bumblebee",{safe:!1})&&zp(e,{peek:!0})==="arbiter"}async function Ier(e,r){let s=await GWe(e,r),t=XSe(s,r);if(t.kind!=="verdict")return;return t.outcome==="flagged"?{flagged:!0,reason:Y$t(s,r,()=>{return}).reason}:{flagged:!1}}
export{QYs,Ier};
