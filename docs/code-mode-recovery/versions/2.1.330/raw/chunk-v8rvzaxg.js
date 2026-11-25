// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Wt}from"/$bunfs/root/chunk-0vw1gz5c.js";import{Xle}from"/$bunfs/root/chunk-6wkvjx00.js";import{ft}from"/$bunfs/root/chunk-w1d7ygsk.js";import{createHash as h}from"crypto";var e=ft("/$bunfs/root/contract-3qfaf3rd.md");var t=ft("/$bunfs/root/deck-wx3e6rww.md");var a="/$bunfs/root/design-5e501774.md.zst";var o=Wt(a,import.meta.dirname);var c="{{cards}}",f=3,C=e;function x(i){let n=Xle(t.trim().split(`
`),(r)=>h("sha256").update(i).update(r).digest("hex")).slice(0,f).join(`
`);return o.replace(c,()=>n)}export{C as CONTRACT_MD,x as dealDesignGuide};
