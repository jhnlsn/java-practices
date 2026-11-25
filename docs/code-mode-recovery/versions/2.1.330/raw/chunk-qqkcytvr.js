// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{y_,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function cW(r){if(typeof r==="string")return r;if(typeof r==="number")return String(r);if(!r)return"";if(Array.isArray(r))return r.map(cW).join("");if(y_(r))return cW(r.props.children);return""}
export{cW};
