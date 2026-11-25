// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Nit,rkl}from"/$bunfs/root/chunk-w03c3634.js";import{oe}from"/$bunfs/root/chunk-chsxmm1h.js";import{qTe}from"/$bunfs/root/chunk-vm00nwct.js";import{$t,rfe}from"/$bunfs/root/chunk-7sej5d3m.js";import{Ie}from"/$bunfs/root/chunk-b03afx74.js";import{T}from"/$bunfs/root/chunk-rhrgztck.js";var t="tengu_glowing_nygaard";function LR(){if(oe().readOthersWriting=!0,Nit()!==void 0&&Ie(t,{safe:!0}))rkl()}function d0e(e){let r=$t(e);return r?.mode==="owner"&&!r.isSharedLive&&!rfe(r)}function Jpr(e,r,n){return qTe(n,e,r)&&oe().readOthersWriting!==!0}function Qpr(e,r,n){if(!d0e(e)&&!Jpr(e,r,n))LR()}function Wrl(e){return T(e)&&Object.values(e).some((r)=>T(r)&&(r.foreign===!0||Array.isArray(r.pulled)&&r.pulled.length>0))}
export{LR,d0e,Jpr,Qpr,Wrl};
