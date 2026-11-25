// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{o_,zn}from"/$bunfs/root/chunk-t39fw2cy.js";import{H3,zUt}from"/$bunfs/root/chunk-71qhfr8d.js";import{HZe,HC,kd,Qy,RR}from"/$bunfs/root/chunk-hg1yqkjk.js";function d(e){return e!==void 0&&o_(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function oOs(e,o){let[r,l]=await Promise.all([RR(e,o),kd(o)]),n=l[zn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=HZe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=Qy(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await H3(e,r.marketplaceInstallLocation,t,l,HC(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:zUt(a,r.marketplaceInstallLocation,t).message}}export{oOs};
