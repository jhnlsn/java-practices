// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_}from"/$bunfs/root/chunk-w578pjby.js";import{R9t,x9t}from"/$bunfs/root/chunk-e1qrqxdt.js";import{be,mhr,It,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function nl(o,{isTyping:s=!1,isEmptyList:r=!1}={}){let d=be(R9t),i=be(x9t),n=mhr(),e=d?.declared,t=d&&o?{hints:o,chain:d.chain,isTyping:s,isEmptyList:r,renders:i}:null;if(t)e?.byId.set(n,{...t,isMounted:e.byId.get(n)?.isMounted??!1});else e?.byId.delete(n);let a=t&&_([o,s,r]);It(()=>{if(!e||!t)return;return e.byId.set(n,{...t,isMounted:!0}),e.changed.emit(),()=>{e.byId.delete(n),e.changed.emit()}},[e,n,a])}
export{nl};
