// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{k}from"/$bunfs/root/chunk-0tz5nchn.js";import{dE}from"/$bunfs/root/chunk-y0nfsdsz.js";import{ie,e,o}from"/$bunfs/root/chunk-9kwtmrrn.js";import{Jg,G}from"/$bunfs/root/chunk-6d7mp9j5.js";import{R}from"/$bunfs/root/chunk-x3fg13na.js";G();function M(c){return c?[c]:[]}function N(s,w){let{label:g,value:f,gapAbove:P}=s;return[P&&w>0&&o(dE.Row,{children:[e(ie,{children:" "}),e(ie,{children:""})]},`gap-${w}`),o(dE.Row,{children:[e(ie,{children:g===void 0?"":`${g}:`}),Jg(f)?f:e(ie,{children:f})]},w)]}function Qi(s){let a=k(10),{rows:b,dimLabels:m}=s,d=m===void 0?!1:m,l;if(a[0]!==d)l=d?{dim:!0}:{bold:!0},a[0]=d,a[1]=l;else l=a[1];let v;if(a[2]===R)v={width:"fill"},a[2]=v;else v=a[2];let t;if(a[3]!==l)t=[l,v],a[3]=l,a[4]=t;else t=a[4];let r;if(a[5]!==b)r=b.flatMap(M).flatMap(N),a[5]=b,a[6]=r;else r=a[6];let y;if(a[7]!==t||a[8]!==r)y=e(dE,{columns:t,children:r}),a[7]=t,a[8]=r,a[9]=y;else y=a[9];return y}
export{Qi};
