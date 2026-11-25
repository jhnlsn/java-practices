// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Cf}from"/$bunfs/root/chunk-d1scfh43.js";var e="self_hosted_runner_";function A9n(n){return n.startsWith(e)}function W$r(n){return Cf([...n]).some(A9n)}function b2s(n){return Cf([n]).filter((t)=>!A9n(t)).join(",")}function w2s(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Cf([t]).some(A9n)}function bya(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!w2s(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:b2s(o)}}
export{A9n,W$r,b2s,w2s,bya};
