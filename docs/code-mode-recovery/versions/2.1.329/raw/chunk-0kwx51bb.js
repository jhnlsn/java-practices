// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{NKt,FKt}from"/$bunfs/root/chunk-3hhhj96e.js";import{be,Clr,xt,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function Ga(o,{isTyping:s=!1,isEmptyList:r=!1}={}){let d=be(NKt),i=be(FKt),n=Clr(),e=d?.declared,t=d&&o?{hints:o,chain:d.chain,isTyping:s,isEmptyList:r,renders:i}:null;if(t)e?.byId.set(n,{...t,isMounted:e.byId.get(n)?.isMounted??!1});else e?.byId.delete(n);let a=t&&_([o,s,r]);xt(()=>{if(!e||!t)return;return e.byId.set(n,{...t,isMounted:!0}),e.changed.emit(),()=>{e.byId.delete(n),e.changed.emit()}},[e,n,a])}
export{Ga};
