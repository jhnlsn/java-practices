// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{VE}from"/$bunfs/root/chunk-a2j3mm6r.js";import{ae,e,o}from"/$bunfs/root/chunk-a46xeenj.js";import{y_,G}from"/$bunfs/root/chunk-bs4h6795.js";import{R}from"/$bunfs/root/chunk-w1d7ygsk.js";G();function M(c){return c?[c]:[]}function N(s,w){let{label:g,value:f,gapAbove:P}=s;return[P&&w>0&&o(VE.Row,{children:[e(ae,{children:" "}),e(ae,{children:""})]},`gap-${w}`),o(VE.Row,{children:[e(ae,{children:g===void 0?"":`${g}:`}),y_(f)?f:e(ae,{children:f})]},w)]}function ma(s){let a=k(10),{rows:b,dimLabels:m}=s,d=m===void 0?!1:m,l;if(a[0]!==d)l=d?{dim:!0}:{bold:!0},a[0]=d,a[1]=l;else l=a[1];let v;if(a[2]===R)v={width:"fill"},a[2]=v;else v=a[2];let t;if(a[3]!==l)t=[l,v],a[3]=l,a[4]=t;else t=a[4];let r;if(a[5]!==b)r=b.flatMap(M).flatMap(N),a[5]=b,a[6]=r;else r=a[6];let y;if(a[7]!==t||a[8]!==r)y=e(VE,{columns:t,children:r}),a[7]=t,a[8]=r,a[9]=y;else y=a[9];return y}
export{ma};
