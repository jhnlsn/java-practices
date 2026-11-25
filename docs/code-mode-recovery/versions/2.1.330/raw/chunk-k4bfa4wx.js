// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{tct,zMl}from"/$bunfs/root/chunk-xfj2cwfv.js";import{se}from"/$bunfs/root/chunk-0rkwgmhx.js";import{cRe}from"/$bunfs/root/chunk-f2vegtjy.js";import{Bt,tme}from"/$bunfs/root/chunk-qtg8rez4.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";import{T}from"/$bunfs/root/chunk-ma3kja9f.js";var t="tengu_glowing_nygaard";function Ox(){if(se().readOthersWriting=!0,tct()!==void 0&&Pe(t,{safe:!0}))zMl()}function k0e(e){let r=Bt(e);return r?.mode==="owner"&&!r.isSharedLive&&!tme(r)}function ubr(e,r,n){return cRe(n,e,r)&&se().readOthersWriting!==!0}function fbr(e,r,n){if(!k0e(e)&&!ubr(e,r,n))Ox()}function xml(e){return T(e)&&Object.values(e).some((r)=>T(r)&&(r.foreign===!0||Array.isArray(r.pulled)&&r.pulled.length>0))}
export{Ox,k0e,ubr,fbr,xml};
