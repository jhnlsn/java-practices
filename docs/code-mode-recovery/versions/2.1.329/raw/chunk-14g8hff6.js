// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ee}from"/$bunfs/root/chunk-m55722gg.js";import{bC}from"/$bunfs/root/chunk-k936fbc4.js";import{Jl}from"/$bunfs/root/chunk-t39fw2cy.js";import{g7}from"/$bunfs/root/chunk-3bb4nnk7.js";var r=128;function iKr(n){let e="displayName"in n?n.displayName:void 0;if(typeof e!=="string")return;if(n.scope==="claudeai")return e;if(n.scope!=="dynamic"||Jl(n))return;return ee(bC(e),r).trimEnd()||void 0}function aKr(n,e){if(n.type!=="claudeai-proxy")return e;let i=e.startsWith(g7)?e.slice(g7.length):n.displayName;return i?.trim()?i:e}
export{iKr,aKr};
