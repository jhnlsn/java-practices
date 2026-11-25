// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s3n}from"/$bunfs/root/chunk-7cfjrnwy.js";import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{rr}from"/$bunfs/root/chunk-8bkqeb5d.js";import{tt}from"/$bunfs/root/chunk-zj98tvrk.js";import{e}from"/$bunfs/root/chunk-a46xeenj.js";import{Mn}from"/$bunfs/root/chunk-w1d7ygsk.js";function Ca(l){let o=k(10),{error:r}=l,c,i;if(o[0]!==r){i=Mn;x:{let g=r?d(r).trim():"";if(g===""){i=null;break x}c=s3n(g)}o[0]=r,o[1]=c,o[2]=i}else c=o[1],i=o[2];if(i!==Mn)return i;let[f,t]=c,s;if(o[3]!==t)s=t!==""&&e(rr,{children:t}),o[3]=t,o[4]=s;else s=o[4];let m;if(o[5]!==f)m=e(rr,{children:f}),o[5]=f,o[6]=m;else m=o[6];let u;if(o[7]!==s||o[8]!==m)u=e(tt,{status:"error",detail:s,children:m}),o[7]=s,o[8]=m,o[9]=u;else u=o[9];return u}
export{Ca};
