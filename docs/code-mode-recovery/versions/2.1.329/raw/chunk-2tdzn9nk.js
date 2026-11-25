// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{k}from"/$bunfs/root/chunk-0tz5nchn.js";import{r}from"/$bunfs/root/chunk-0b3aev3g.js";import{Ca}from"/$bunfs/root/chunk-623790xd.js";import{e,o}from"/$bunfs/root/chunk-9kwtmrrn.js";import{Ib}from"/$bunfs/root/chunk-sa50zt3q.js";function d(g){return g.startsWith(".")}function PKt(y){let f=k(8),{place:n,files:t}=y;if(t.length===0){return null}let s;if(f[0]!==t)s=Ib(t),f[0]=t,f[1]=s;else s=f[1];let c;if(f[2]!==n||f[3]!==s)c=o(r,{children:["Trusting this ",n," loads ",s,"."]}),f[2]=n,f[3]=s,f[4]=c;else c=f[4];let i=c,a;if(f[5]!==t||f[6]!==i)a=t.every(d)?i:e(Ca,{multiline:!0,children:i}),f[5]=t,f[6]=i,f[7]=a;else a=f[7];return a}
export{PKt};
