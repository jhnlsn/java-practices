// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Jg,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function Rj(r){if(typeof r==="string")return r;if(typeof r==="number")return String(r);if(!r)return"";if(Array.isArray(r))return r.map(Rj).join("");if(Jg(r))return Rj(r.props.children);return""}
export{Rj};
