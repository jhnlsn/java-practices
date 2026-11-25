// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{u8i,s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{_k}from"/$bunfs/root/chunk-g9qwcm48.js";function Jf(){return t(s.MCP_TIMEOUT)}function Efl(n){return t(u8i.parse(n))<_k(Jf)}function Jbt(){return Math.min(Jf(),1e4)}function gWe(){let n=s.MCP_CONNECT_TIMEOUT_MS;return n&&n>0?Math.min(n,2147483647):5000}var Pfe=2000,vfl=8000,Tfl=500;function t(n){return n&&n>0?Math.min(n,2147483647):30000}
export{Jf,Efl,Jbt,gWe,Pfe,vfl,Tfl};
