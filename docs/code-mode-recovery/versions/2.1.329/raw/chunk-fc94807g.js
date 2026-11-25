// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Pxe}from"/$bunfs/root/chunk-kgzzwvwc.js";import{wTs,_Le}from"/$bunfs/root/chunk-t39fw2cy.js";import{yit}from"/$bunfs/root/chunk-aq3ms068.js";function gBs(e){if(!e?.length)return;let o=Object.create(null);for(let r of e){if(!r?.org_max_permission||r.org_max_permission==="allow")continue;let n=_Le().safeParse(r.org_max_permission);o[r.name]=n.success?n.data:"blocked"}return Object.keys(o).length>0?o:void 0}function Qqt(e,o){let r=Pxe({readFrom:o??e.readFrom}),n=r===void 0?{scope:"dynamic"}:{scope:"project",readFrom:r},s;if(e.type==="http"||e.type==="sse"){let{tools:t,...c}=e,a=wTs(c),i=gBs(t);s={...a,...i&&{toolPermissions:i},...n}}else s={...e,...n};if(p(e))delete s.displayName;return yit(e,s)}function Qma(e,o){let r=Qqt(e,o);if(!p(e))return r;let{scope:n,displayName:s}=e,t=r;if(t.scope=n,typeof s==="string")t.displayName=s;return t}function p(e){let o="scope"in e?e.scope:void 0;return o!==void 0&&o!=="dynamic"&&o!=="claudeai"}
export{gBs,Qqt,Qma};
