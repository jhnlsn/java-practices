// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{pn}from"/$bunfs/root/chunk-z6pfqf6e.js";import{qN,sO,jC,vw}from"/$bunfs/root/chunk-q3a5dy2r.js";import{at}from"/$bunfs/root/chunk-hkvzj051.js";import{db,pbs}from"/$bunfs/root/chunk-fp3vnecp.js";import{kR}from"/$bunfs/root/chunk-nbyg4q5d.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:qN(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?pn(e):vw(e,kR(t))}async function COa(e,t,n,i){return a(jC(await d(e,n,i)),xVo(t))}async function AOa(e,t,n,i){let o=await d(e,n,i),p=a(jC(o),xVo(t)),r=sO(o),s=n===void 0?void 0:z8s(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function z8s(e,t){let n=at.dirSyncRecord(e,c(t));return db(n)===void 0?n:void 0}function xVo(e){return`${c(e)}${pbs}`}
export{COa,AOa,z8s,xVo};
