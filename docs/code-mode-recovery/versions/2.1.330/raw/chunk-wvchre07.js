// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{r}from"/$bunfs/root/chunk-8bkqeb5d.js";import{ae,e,o}from"/$bunfs/root/chunk-a46xeenj.js";import{dy,nf,y_,G}from"/$bunfs/root/chunk-bs4h6795.js";import{Mn}from"/$bunfs/root/chunk-w1d7ygsk.js";G();G();function v(g){return g!==""&&!p(g)}function C(a,h){return o(nf,{children:[h>0&&e(r,{dimColor:!0,children:" \xB7 "}),a]},y_(a)?a.key??h:h)}function it(d){let m=k(5),{children:t}=d,i,l;if(m[0]!==t){l=Mn;q:{let s=dy.toArray(t).filter(v);if(s.length===0){l=null;break q}i=s.map(C)}m[0]=t,m[1]=i,m[2]=l}else i=m[1],l=m[2];if(l!==Mn)return l;let y;if(m[3]!==i)y=e(ae,{children:i}),m[3]=i,m[4]=y;else y=m[4];return y}function p(d){return y_(d)&&[d.props.chord].flat().every((t)=>t==="")}
export{it};
