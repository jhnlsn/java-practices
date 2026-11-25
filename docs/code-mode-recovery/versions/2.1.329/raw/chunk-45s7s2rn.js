// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{k}from"/$bunfs/root/chunk-0tz5nchn.js";import{r}from"/$bunfs/root/chunk-0b3aev3g.js";import{Wn}from"/$bunfs/root/chunk-075nr20g.js";import{e}from"/$bunfs/root/chunk-9kwtmrrn.js";function Tt(g){let c=k(8),{children:d,tone:p,oneRow:R,settled:i}=g,t=p===void 0?"dim":p;const a=(R===void 0?!1:R)?1:void 0,l=t==="dim",s=t==="warning"||t==="error"?t:void 0;let n;if(c[0]!==d||c[1]!==l||c[2]!==s)n=e(r,{dimColor:l,color:s,children:d}),c[0]=d,c[1]=l,c[2]=s,c[3]=n;else n=c[3];let f;if(c[4]!==i||c[5]!==a||c[6]!==n)f=e(Wn,{height:a,settled:i,children:n}),c[4]=i,c[5]=a,c[6]=n,c[7]=f;else f=c[7];return f}
export{Tt};
