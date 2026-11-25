// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{pVe}from"/$bunfs/root/chunk-sfbzxwg1.js";import{n,C,Pe,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var t=p(()=>n().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((r)=>!(r in Object.prototype))),i=p(()=>C(Pe({arg:t(),local:t(),ref:t()})).length(1));function E9t(r){let a=i().safeParse(r?.[pVe]);if(!a.success)return;let[e]=a.data;return e!==void 0&&e.local!==e.ref?e:void 0}
export{E9t};
