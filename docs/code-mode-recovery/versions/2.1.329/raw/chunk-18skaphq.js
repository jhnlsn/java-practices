// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{zf,g,xN}from"/$bunfs/root/chunk-0b3aev3g.js";import{O_}from"/$bunfs/root/chunk-2kad367j.js";import{RD}from"/$bunfs/root/chunk-cp4d6w6q.js";import{e}from"/$bunfs/root/chunk-9kwtmrrn.js";import{be,xt,TS,P,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function a(){let r=be(RD),[o,t,n,,m]=xN(),s=m()??t.isVisible;return[o,s||r,n]}function AD({children:r,updatesWhenBackInView:o=!1}){let t=be(O_),[n,m,s]=a(),u=P(r),[,c]=TS((d)=>d+1,0),i=!m;if(!i)u.current=r;let l=t?.columns,p=t?.rows;xt(()=>{if(i&&s())c()},[l,p,i,s]);let{subscribeLayout:f}=be(zf);return xt(()=>{if(!i||!o)return;return f(()=>{if(s())c()})},[i,o,f,s]),e(g,{ref:n,children:u.current})}function UO(r){let[o,t]=a(),n=P(r);if(t)n.current=r;return[o,n.current]}
export{AD,UO};
