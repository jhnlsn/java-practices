// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{k}from"/$bunfs/root/chunk-0tz5nchn.js";import{r}from"/$bunfs/root/chunk-0b3aev3g.js";import{ie,e,o}from"/$bunfs/root/chunk-9kwtmrrn.js";import{M_,of,Jg,G}from"/$bunfs/root/chunk-6d7mp9j5.js";import{In}from"/$bunfs/root/chunk-x3fg13na.js";G();G();function v(g){return g!==""&&!p(g)}function C(a,h){return o(of,{children:[h>0&&e(r,{dimColor:!0,children:" \xB7 "}),a]},Jg(a)?a.key??h:h)}function dt(d){let m=k(5),{children:t}=d,i,l;if(m[0]!==t){l=In;q:{let s=M_.toArray(t).filter(v);if(s.length===0){l=null;break q}i=s.map(C)}m[0]=t,m[1]=i,m[2]=l}else i=m[1],l=m[2];if(l!==In)return l;let y;if(m[3]!==i)y=e(ie,{children:i}),m[3]=i,m[4]=y;else y=m[4];return y}function p(d){return Jg(d)&&[d.props.chord].flat().every((t)=>t==="")}
export{dt};
