// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";class s{#t=new Set;#e=new Map;lastBellAt=0;claim(t){if(this.#t.has(t))return!1;return this.#t.add(t),!0}has(t){return this.#t.has(t)}claimIfChanged(t,e){if(this.#e.get(t)===e)return!1;return this.#e.set(t,e),!0}}var iP=new j(()=>new s);function ja(){return iP.of(N().host)}
export{iP,ja};
