// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{As}from"/$bunfs/root/chunk-sah8dzn4.js";import{S,Fr}from"/$bunfs/root/chunk-78g0060s.js";import{yO}from"/$bunfs/root/chunk-rwa52046.js";var e=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function hLs(n){return yO(n)||typeof n==="string"&&e.test(n)}function Ce(n){if(n==null)return;return/^[A-Za-z0-9_-]{1,128}$/.test(n)&&(hLs(n)||As(n)===n)?Fr(n):S("nonconforming")}function O4n(n){return Fr(n.map((t)=>Ce(t)).join(","))}
export{hLs,Ce,O4n};
