// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{qs}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Rg}from"/$bunfs/root/chunk-hg1yqkjk.js";function d4t(s){return s.type==="assistant"&&s.message.model!==qs&&s.isMeta!==!0&&s.isVirtual!==!0}function d$r(s,t){let e=s.supersedesUuids;if(e===void 0||e.length===0)return!1;if(e.includes(t.uuid))return!0;return Rg([t]).some((i)=>e.includes(i.uuid))}
export{d4t,d$r};
