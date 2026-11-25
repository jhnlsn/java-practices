// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{r}from"/$bunfs/root/chunk-8bkqeb5d.js";import{o}from"/$bunfs/root/chunk-a46xeenj.js";function fx(c){let f=k(10),{added:d,removed:e,bold:a}=c;if(d===0&&e===0){return null}let b;if(f[0]!==d||f[1]!==a)b=d>0&&o(r,{color:"diffAddedWord",bold:a,children:["+",d]}),f[0]=d,f[1]=a,f[2]=b;else b=f[2];const v=d>0&&e>0&&" ";let t;if(f[3]!==a||f[4]!==e)t=e>0&&o(r,{color:"diffRemovedWord",bold:a,children:["-",e]}),f[3]=a,f[4]=e,f[5]=t;else t=f[5];let p;if(f[6]!==b||f[7]!==v||f[8]!==t)p=o(r,{children:[b,v,t]}),f[6]=b,f[7]=v,f[8]=t,f[9]=p;else p=f[9];return p}
export{fx};
