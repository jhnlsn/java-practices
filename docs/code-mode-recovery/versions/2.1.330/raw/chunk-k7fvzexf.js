// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{EVt}from"/$bunfs/root/chunk-se72nykz.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var r=EVt("computerUseMcpState",void 0);class VXt{#e;constructor(e){this.#e=e}static over(e){return new VXt(r(e.getState,e.setState))}get(){return this.#e.get()}update(e){this.#e.set(e)}}class t{owner=void 0;acquire(e){if(this.owner)return()=>{};return this.owner=e,()=>{if(this.owner===e)this.owner=void 0}}}var LAn=new ze(()=>new t);function cor(e){return LAn.of(e).owner}
export{VXt,LAn,cor};
