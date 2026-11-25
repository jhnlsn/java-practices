// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
class Ult extends RegExp{#e;constructor(e,r){super("");this.#e={source:e,flags:r}}static partsOf(e){return#e in e?e.#e:void 0}get source(){return this.#e.source}get flags(){return this.#e.flags}}export{Ult};
