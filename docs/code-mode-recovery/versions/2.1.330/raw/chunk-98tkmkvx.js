// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Jra,s}from"/$bunfs/root/chunk-c203g5kd.js";import{Qk}from"/$bunfs/root/chunk-nnk8tdzz.js";function bf(){return t(s.MCP_TIMEOUT)}function pvl(n){return t(Jra.parse(n))<Qk(bf)}function Wvt(){return Math.min(bf(),1e4)}function Awe(){let n=s.MCP_CONNECT_TIMEOUT_MS;return n&&n>0?Math.min(n,2147483647):5000}var Ame=2000,mvl=8000,hvl=500;function t(n){return n&&n>0?Math.min(n,2147483647):30000}
export{bf,pvl,Wvt,Awe,Ame,mvl,hvl};
