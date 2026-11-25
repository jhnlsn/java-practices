// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{x_,Kn}from"/$bunfs/root/chunk-xcgcdx61.js";import{h9,A2t}from"/$bunfs/root/chunk-wj4me9k5.js";import{Pnt,_A,Bd,vS,vx}from"/$bunfs/root/chunk-bzyb60p0.js";function d(e){return e!==void 0&&x_(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function h1s(e,o){let[r,l]=await Promise.all([vx(e,o),Bd(o)]),n=l[Kn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=Pnt(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=vS(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await h9(e,r.marketplaceInstallLocation,t,l,_A(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:A2t(a,r.marketplaceInstallLocation,t).message}}export{h1s};
