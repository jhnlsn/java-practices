// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import"/$bunfs/root/chunk-e2m0afe8.js";import{_Rn}from"/$bunfs/root/chunk-zmyhs3mc.js";import{T}from"/$bunfs/root/chunk-rhrgztck.js";import{Zp,Qe}from"/$bunfs/root/chunk-2xdvqr6d.js";var f=8,m=_Rn();function p(r,n){if(!T(r)||n.size===0)return r;let{type:i,props:t,children:o}=r,{source:u,ir:a,...c}=T(t)?t:{};if(i==="Svg"&&typeof u==="string"){let e=Qe(u);return n.delete(e)?{...r,props:{sourceHash:e,...c}}:r}let s=i==="Shader"&&T(a)?m(a):void 0;return{...r,...s!==void 0&&n.delete(s)&&{props:{irHash:s,...c}},...Array.isArray(o)&&{children:o.map((e)=>p(e,n))}}}function A(r,n){return Array.isArray(n)&&n.length<=f&&n.every((t)=>typeof t==="string"&&Zp.test(t))?p(r,new Set(n)):r}export{A as withHeldParts};
