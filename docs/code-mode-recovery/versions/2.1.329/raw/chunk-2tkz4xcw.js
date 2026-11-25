// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s9}from"/$bunfs/root/chunk-m55722gg.js";import{sC}from"/$bunfs/root/chunk-w03c3634.js";import{Ede}from"/$bunfs/root/chunk-xt7d01yp.js";import{Uut,Qw}from"/$bunfs/root/chunk-b8a7h0f8.js";import{Ie}from"/$bunfs/root/chunk-b03afx74.js";var p="bot_protected_tengu_merry_rainbow";function xxt(){return Ie(p,{safe:!0})}function Y$s(t,r){let e=Uut(t,r);return r==="prompt"&&Qw(e)==="bash"&&xxt()?` ${e}`:e}function w5n(t){return!Ede(sC(t).text,null)||!xxt()}function vma(t){return w5n(t)?t:` ${t}`}function Fut(t){let r=o(t);return/^\s/.test(r)&&r.trimStart().startsWith("/")&&xxt()}function o(t){return sC(t.replace(s9,"")).text}function n(t){return o(t).trim().toLowerCase()}function Tma(t,r){let e=n(r);return t?.find((i)=>n(i.label)===e)}
export{xxt,Y$s,w5n,vma,Fut,Tma};
