// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import"/$bunfs/root/chunk-wgyw76w5.js";import{fHn}from"/$bunfs/root/chunk-drrj083m.js";import{T}from"/$bunfs/root/chunk-ma3kja9f.js";import{fm,Je}from"/$bunfs/root/chunk-ccm69jjy.js";var f=8,m=fHn();function p(r,n){if(!T(r)||n.size===0)return r;let{type:i,props:t,children:o}=r,{source:u,ir:a,...c}=T(t)?t:{};if(i==="Svg"&&typeof u==="string"){let e=Je(u);return n.delete(e)?{...r,props:{sourceHash:e,...c}}:r}let s=i==="Shader"&&T(a)?m(a):void 0;return{...r,...s!==void 0&&n.delete(s)&&{props:{irHash:s,...c}},...Array.isArray(o)&&{children:o.map((e)=>p(e,n))}}}function A(r,n){return Array.isArray(n)&&n.length<=f&&n.every((t)=>typeof t==="string"&&fm.test(t))?p(r,new Set(n)):r}export{A as withHeldParts};
