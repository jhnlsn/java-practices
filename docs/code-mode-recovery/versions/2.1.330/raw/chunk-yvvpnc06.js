// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{r}from"/$bunfs/root/chunk-8bkqeb5d.js";import{$a}from"/$bunfs/root/chunk-6tzmmjxg.js";import{e,o}from"/$bunfs/root/chunk-a46xeenj.js";import{ow}from"/$bunfs/root/chunk-kvavrh0f.js";function d(g){return g.startsWith(".")}function h9t(y){let f=k(8),{place:n,files:t}=y;if(t.length===0){return null}let s;if(f[0]!==t)s=ow(t),f[0]=t,f[1]=s;else s=f[1];let c;if(f[2]!==n||f[3]!==s)c=o(r,{children:["Trusting this ",n," loads ",s,"."]}),f[2]=n,f[3]=s,f[4]=c;else c=f[4];let i=c,a;if(f[5]!==t||f[6]!==i)a=t.every(d)?i:e($a,{multiline:!0,children:i}),f[5]=t,f[6]=i,f[7]=a;else a=f[7];return a}
export{h9t};
