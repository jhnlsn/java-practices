// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
class mee{turnOf=new Map;declinedTurns=new Set;endedTurns=new WeakSet;endedLoops=new Set;add(n,e){this.turnOf.set(n,e)}forget(n){for(let[e,d]of this.turnOf)if(d.signal===n)this.turnOf.delete(e)}end(n,e){let d=n===void 0?void 0:this.turnOf.get(n);if(d!==void 0)this.endedTurns.add(d.signal);return this.endedLoops.add(e),d}}
export{mee};
