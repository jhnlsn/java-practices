// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{K2}from"/$bunfs/root/chunk-hrrs5w99.js";import{Xc}from"/$bunfs/root/chunk-jnqtrw4b.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";var d=new j(()=>({degraded:!1}));function t(){return d.of(N().host)}function SVe(n,r){if(n!==Xc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=K2(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function tMa(){return t().degraded}
export{SVe,tMa};
