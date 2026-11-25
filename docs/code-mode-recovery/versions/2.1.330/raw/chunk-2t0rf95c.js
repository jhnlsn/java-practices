// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{bs}from"/$bunfs/root/chunk-zzrn5zap.js";import{oB,kc}from"/$bunfs/root/chunk-yz5b8aaa.js";import{U$a}from"/$bunfs/root/chunk-kj84g0v7.js";async function A8n(s,i){using a=new DisposableStack;let t=new Map;for(let e of i){if(e.type!=="http"&&e.type!=="sse")continue;let r=kc(s,e);if(!t.has(r))t.set(r,e),a.use(U$a(r))}if(await oB()===bs)return{cleared:!1,reason:"credential_store_failed"};let c=import.meta.require("/$bunfs/root/chunk-4kvvnjdb.js").mcpAuthModule(),o={cleared:!0};for(let e of t.values()){let r=await c.revokeServerTokens(s,e);if(!r.cleared&&(o.cleared||r.reason==="credential_store_failed"))o=r}if(!o.cleared&&o.reason==="credential_store_failed")return o;let n=await oB();if(n===bs||[...t.keys()].some((e)=>!!n?.mcpOAuth?.[e]))return{cleared:!1,reason:"credential_store_failed"};return o}
export{A8n};
