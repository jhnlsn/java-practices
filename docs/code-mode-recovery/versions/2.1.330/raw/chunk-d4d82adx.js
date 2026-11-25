// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Xe,si}from"/$bunfs/root/chunk-8bkqeb5d.js";import{vve,K3,Ha,TGs}from"/$bunfs/root/chunk-2t5dst6n.js";import{yPo}from"/$bunfs/root/chunk-qbrmmydq.js";import{Zu,po}from"/$bunfs/root/chunk-z8dyhx9v.js";import{OF}from"/$bunfs/root/chunk-f3ymc800.js";import{I,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function sY(s=()=>!0,u=!0){OF(u);let i=Zu(),e=I(Date.now()+yPo()),t=si(),a=Xe(),{refusedWithin:f,noteRefused:c}=po(),{refusedWithin:m,noteRefused:p}=po();function d(n=!1,l=!1,R=vve){let r=Date.now()<e.current;if(r)e.current=Date.now();let h=Math.max(i(),e.current),o=r&&(n||a)||TGs(t,vve)||Ha(t,h,R);if(o||l||!s()||f()||m(K3)){if(c(),o||n)p();return!0}return!1}return{refuseInput:d}}
export{sY};
