// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ee}from"/$bunfs/root/chunk-m55722gg.js";import{Pi}from"/$bunfs/root/chunk-w03c3634.js";function n6e(n){return n.replace(/[\r\n\u2028\u2029]+/g," ")}function p9n(n,r){let e=Pi(n);if(e.length<=r)return e;let t=ee(e,r),o=Array.from(e.slice(t.length)).length;return`${t} \u2026 (${o} more characters follow that are NOT shown in this message)`}
export{n6e,p9n};
