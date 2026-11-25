// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";async function ext(n,e){return(await EDo(n,e))?.tags??null}async function EDo(n,e){try{let s=e.getAccessToken?await e.getAccessToken():void 0,{getBridgeSessionOrStatus:i}=await import("/$bunfs/root/chunk-hgqqyyxp.js"),{session:r}=await i(n,{baseUrl:e.baseUrl,...s&&{getAccessToken:()=>s},credentials:e.credentials,useV2:!0});if(!r||!Array.isArray(r.tags))return null;let a=typeof r.created_at==="string"?Date.parse(r.created_at):Number.NaN;return{tags:r.tags,createdAtMs:Number.isNaN(a)?void 0:a}}catch(s){return t(`[bridge:session] session tag read failed: ${d(s)}`,{level:"warn"}),null}}
export{ext,EDo};
