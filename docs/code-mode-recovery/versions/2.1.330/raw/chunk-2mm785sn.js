// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{BOe}from"/$bunfs/root/chunk-f9x2f6cx.js";import{OHs,MFe}from"/$bunfs/root/chunk-xcgcdx61.js";import{Ddt}from"/$bunfs/root/chunk-865at33z.js";function wqs(e){if(!e?.length)return;let o=Object.create(null);for(let r of e){if(!r?.org_max_permission||r.org_max_permission==="allow")continue;let n=MFe().safeParse(r.org_max_permission);o[r.name]=n.success?n.data:"blocked"}return Object.keys(o).length>0?o:void 0}function J8t(e,o){let r=BOe({readFrom:o??e.readFrom}),n=r===void 0?{scope:"dynamic"}:{scope:"project",readFrom:r},s;if(e.type==="http"||e.type==="sse"){let{tools:t,...c}=e,a=OHs(c),i=wqs(t);s={...a,...i&&{toolPermissions:i},...n}}else s={...e,...n};if(p(e))delete s.displayName;return Ddt(e,s)}function XTa(e,o){let r=J8t(e,o);if(!p(e))return r;let{scope:n,displayName:s}=e,t=r;if(t.scope=n,typeof s==="string")t.displayName=s;return t}function p(e){let o="scope"in e?e.scope:void 0;return o!==void 0&&o!=="dynamic"&&o!=="claudeai"}
export{wqs,J8t,XTa};
