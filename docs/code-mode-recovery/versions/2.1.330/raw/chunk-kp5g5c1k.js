// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Mg}from"/$bunfs/root/chunk-bzyb60p0.js";import{xs}from"/$bunfs/root/chunk-bp9b0hd8.js";function cYt(s){return s.type==="assistant"&&s.message.model!==xs&&s.isMeta!==!0&&s.isVirtual!==!0}function B6r(s,t){let e=s.supersedesUuids;if(e===void 0||e.length===0)return!1;if(e.includes(t.uuid))return!0;return Mg([t]).some((i)=>e.includes(i.uuid))}
export{cYt,B6r};
