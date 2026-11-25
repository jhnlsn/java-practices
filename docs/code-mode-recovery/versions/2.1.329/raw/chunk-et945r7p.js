// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{bn}from"/$bunfs/root/chunk-ca90c7br.js";import{ZH,cP,uC,Jk}from"/$bunfs/root/chunk-x7f8sr97.js";import{st}from"/$bunfs/root/chunk-4gsb5pr1.js";import{HS,yus}from"/$bunfs/root/chunk-v1ke29af.js";import{jP}from"/$bunfs/root/chunk-0nb7ajhk.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:ZH(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?bn(e):Jk(e,jP(t))}async function Tba(e,t,n,i){return a(uC(await d(e,n,i)),d$o(t))}async function Cba(e,t,n,i){let o=await d(e,n,i),p=a(uC(o),d$o(t)),r=cP(o),s=n===void 0?void 0:Hzs(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function Hzs(e,t){let n=st.dirSyncRecord(e,c(t));return HS(n)===void 0?n:void 0}function d$o(e){return`${c(e)}${yus}`}
export{Tba,Cba,Hzs,d$o};
