// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Bt}from"/$bunfs/root/chunk-pdmxgey0.js";import{xWe}from"/$bunfs/root/chunk-pcd9nmdp.js";import{lt}from"/$bunfs/root/chunk-x3fg13na.js";import{createHash as h}from"crypto";var e=lt("/$bunfs/root/contract-3qfaf3rd.md");var t=lt("/$bunfs/root/deck-wx3e6rww.md");var a="/$bunfs/root/design-8c81501a.md.zst";var o=Bt(a,import.meta.dirname);var c="{{cards}}",f=3,C=e;function L(n){let i=xWe(t.trim().split(`
`),(r)=>h("sha256").update(n).update(r).digest("hex")).slice(0,f).join(`
`);return o.replace(c,()=>i)}export{C as CONTRACT_MD,L as dealDesignGuide};
