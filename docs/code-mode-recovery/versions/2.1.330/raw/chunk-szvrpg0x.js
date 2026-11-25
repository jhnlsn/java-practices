// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";class s{#t=new Set;#e=new Map;lastBellAt=0;claim(t){if(this.#t.has(t))return!1;return this.#t.add(t),!0}has(t){return this.#t.has(t)}claimIfChanged(t,e){if(this.#e.get(t)===e)return!1;return this.#e.set(t,e),!0}}var iO=new j(()=>new s);function Wa(){return iO.of(N().host)}
export{iO,Wa};
