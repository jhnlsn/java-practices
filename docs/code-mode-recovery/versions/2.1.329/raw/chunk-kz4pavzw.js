// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{hs}from"/$bunfs/root/chunk-f7vjj23d.js";import{ZU,nc}from"/$bunfs/root/chunk-hrrs5w99.js";import{nPa}from"/$bunfs/root/chunk-1mked7yv.js";async function mKn(s,i){using a=new DisposableStack;let t=new Map;for(let e of i){if(e.type!=="http"&&e.type!=="sse")continue;let r=nc(s,e);if(!t.has(r))t.set(r,e),a.use(nPa(r))}if(await ZU()===hs)return{cleared:!1,reason:"credential_store_failed"};let c=import.meta.require("/$bunfs/root/chunk-a5tfrce8.js").mcpAuthModule(),o={cleared:!0};for(let e of t.values()){let r=await c.revokeServerTokens(s,e);if(!r.cleared&&(o.cleared||r.reason==="credential_store_failed"))o=r}if(!o.cleared&&o.reason==="credential_store_failed")return o;let n=await ZU();if(n===hs||[...t.keys()].some((e)=>!!n?.mcpOAuth?.[e]))return{cleared:!1,reason:"credential_store_failed"};return o}
export{mKn};
