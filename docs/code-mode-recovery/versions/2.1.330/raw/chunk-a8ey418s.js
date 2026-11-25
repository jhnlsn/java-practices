// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ao,jqn,at}from"/$bunfs/root/chunk-hkvzj051.js";import{Em}from"/$bunfs/root/chunk-q3a5dy2r.js";import{db}from"/$bunfs/root/chunk-fp3vnecp.js";import{basename as a,dirname as c}from"path";var DUi=6;function O2e(e){return e.endsWith(".meta.json")?av(e):void 0}function av(e){let i=a(e);if(jqn(i))return;let o=Em(),t=[i],n=c(e);while(n!==o&&t.length<=DUi+1){let f=c(n);if(f===n)return;t.unshift(a(n)),n=f}if(n!==o||t.length<3)return;let[s,d,...r]=t;if(!Ao(s)||!Ao(d)||r.length===0||!r.every(Ao))return;let u=at.sidecar(s,d,r);return db(u)===void 0?u:void 0}function XEr(e){return typeof e==="string"?av(e):e.key}
export{DUi,O2e,av,XEr};
