// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{gWn,ARe}from"/$bunfs/root/chunk-0zgmgt5h.js";import{k}from"/$bunfs/root/chunk-0tz5nchn.js";import{r,Sn}from"/$bunfs/root/chunk-0b3aev3g.js";import{e}from"/$bunfs/root/chunk-9kwtmrrn.js";function P1(P){let y=k(10),{children:o,color:u,bold:m,linkHref:a}=P,l;if(y[0]!==o||y[1]!==a){l=[];let n=0;for(const i of o.matchAll(gWn)){let x=ARe(i[0]);let b=a===void 0?x:a(x);if(b===void 0){continue}if(i.index>n)l.push(o.slice(n,i.index));l.push(e(Sn,{url:b,children:b},i.index)),n=i.index+x.length}let s;if(y[3]!==o||y[4]!==n)s=o.slice(n),y[3]=o,y[4]=n,y[5]=s;else s=y[5];l.push(s);y[0]=o,y[1]=a,y[2]=l}else l=y[2];let s;if(y[6]!==m||y[7]!==u||y[8]!==l)s=e(r,{color:u,bold:m,children:l}),y[6]=m,y[7]=u,y[8]=l,y[9]=s;else s=y[9];return s}
export{P1};
