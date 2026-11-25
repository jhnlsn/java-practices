// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
class lrr{#e=new Map;add(e,n){this.#e.set(s(e),{job:e,refusedAt:n})}takeRepeat(e,n){for(let[r,{refusedAt:t}]of this.#e)if(n-t>900000)this.#e.delete(r);if(this.#e.delete(s(e)))return"again";for(let[r,{job:t}]of this.#e)if(t.cron===e.cron&&t.prompt===e.prompt&&e.dueAt-t.dueAt>=43200000)return this.#e.delete(r),{missed:t.dueAt};return}clear(){this.#e.clear()}}function s({dueAt:e,prompt:n}){return`${e}
${n}`}
export{lrr};
