// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{$f}from"/$bunfs/root/chunk-qebpc5de.js";var e="self_hosted_runner_";function rZn(n){return n.startsWith(e)}function SVr(n){return $f([...n]).some(rZn)}function I5s(n){return $f([n]).filter((t)=>!rZn(t)).join(",")}function M5s(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return $f([t]).some(rZn)}function vxa(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!M5s(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:I5s(o)}}
export{rZn,SVr,I5s,M5s,vxa};
