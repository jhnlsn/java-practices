// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var pS=1e4;async function Nd(e,r,t){let s=Math.max(1,Math.floor(t?.maxPages??1e4)),u;for(let a=0;a<s;a++){if(t?.budget!==void 0){if(t.budget.pagesLeft<1)return{status:"capped"};t.budget.pagesLeft--}let n=await e(u);if(!n.ok)return{status:"error",error:n.error};if(await r(n.value.items),t?.until?.())return{status:"done"};if(u=n.value.cursor,!u)return{status:"done"}}return{status:"capped"}}function VPo(e=1e4){return{pagesLeft:e,capped:0}}function iDl(e,r){if(e.status==="error")return"error";if(e.status==="capped")return r.capped++,r.capped===1?"first-truncation":void 0;return}function aDl(e){return Math.max(0,e.capped-1)}
export{pS,Nd,VPo,iDl,aDl};
