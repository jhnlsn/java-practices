// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{To,T2n,st}from"/$bunfs/root/chunk-4gsb5pr1.js";import{Ym}from"/$bunfs/root/chunk-x7f8sr97.js";import{HS}from"/$bunfs/root/chunk-v1ke29af.js";import{basename as a,dirname as c}from"path";var rIi=6;function qBe(e){return e.endsWith(".meta.json")?SE(e):void 0}function SE(e){let i=a(e);if(T2n(i))return;let o=Ym(),t=[i],n=c(e);while(n!==o&&t.length<=rIi+1){let f=c(n);if(f===n)return;t.unshift(a(n)),n=f}if(n!==o||t.length<3)return;let[s,d,...r]=t;if(!To(s)||!To(d)||r.length===0||!r.every(To))return;let u=st.sidecar(s,d,r);return HS(u)===void 0?u:void 0}function Fgr(e){return typeof e==="string"?SE(e):e.key}
export{rIi,qBe,SE,Fgr};
