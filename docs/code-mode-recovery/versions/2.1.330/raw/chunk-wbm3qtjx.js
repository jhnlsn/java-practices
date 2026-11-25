// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{s4e}from"/$bunfs/root/chunk-q1sh0fgd.js";import{n,C,Ae,B}from"/$bunfs/root/chunk-adx6804h.js";B();var t=p(()=>n().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((r)=>!(r in Object.prototype))),i=p(()=>C(Ae({arg:t(),local:t(),ref:t()})).length(1));function bJt(r){let a=i().safeParse(r?.[s4e]);if(!a.success)return;let[e]=a.data;return e!==void 0&&e.local!==e.ref?e:void 0}
export{bJt};
