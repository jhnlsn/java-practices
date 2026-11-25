// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Njt}from"/$bunfs/root/chunk-j3mc0yng.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var r=Njt("computerUseMcpState",void 0);class U5t{#e;constructor(e){this.#e=e}static over(e){return new U5t(r(e.getState,e.setState))}get(){return this.#e.get()}update(e){this.#e.set(e)}}class t{owner=void 0;acquire(e){if(this.owner)return()=>{};return this.owner=e,()=>{if(this.owner===e)this.owner=void 0}}}var Xwn=new qe(()=>new t);function wJn(e){return Xwn.of(e).owner}
export{U5t,Xwn,wJn};
