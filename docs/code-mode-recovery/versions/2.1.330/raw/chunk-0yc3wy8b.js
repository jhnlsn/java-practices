// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
class e{drains=new Set;register(i){this.drains.add(i)}async drainAll(){await Promise.all([...this.drains].map((i)=>i().catch(()=>{})))}}var r=new e;function hut(i){r.register(i)}function AM(){return r.drainAll()}
export{hut,AM};
