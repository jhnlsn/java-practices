// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{gz}from"/$bunfs/root/chunk-yz5b8aaa.js";import{bd}from"/$bunfs/root/chunk-epy4sc29.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";var d=new j(()=>({degraded:!1}));function t(){return d.of(N().host)}function m4e(n,r){if(n!==bd)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=gz(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function AWa(){return t().degraded}
export{m4e,AWa};
