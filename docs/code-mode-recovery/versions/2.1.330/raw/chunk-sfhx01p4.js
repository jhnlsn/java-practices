// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{sp,g,DF}from"/$bunfs/root/chunk-8bkqeb5d.js";import{ay}from"/$bunfs/root/chunk-3jkk3v3z.js";import{NL}from"/$bunfs/root/chunk-v2br6d1p.js";import{e}from"/$bunfs/root/chunk-a46xeenj.js";import{be,It,nb,I,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function a(){let r=be(NL),[o,t,n,,m]=DF(),s=m()??t.isVisible;return[o,s||r,n]}function LL({children:r,updatesWhenBackInView:o=!1}){let t=be(ay),[n,m,s]=a(),u=I(r),[,c]=nb((d)=>d+1,0),i=!m;if(!i)u.current=r;let l=t?.columns,p=t?.rows;It(()=>{if(i&&s())c()},[l,p,i,s]);let{subscribeLayout:f}=be(sp);return It(()=>{if(!i||!o)return;return f(()=>{if(s())c()})},[i,o,f,s]),e(g,{ref:n,children:u.current})}function UI(r){let[o,t]=a(),n=I(r);if(t)n.current=r;return[o,n.current]}
export{LL,UI};
