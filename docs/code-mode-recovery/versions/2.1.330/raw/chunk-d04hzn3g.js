// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xe}from"/$bunfs/root/chunk-7r4ehpnw.js";import{Hut}from"/$bunfs/root/chunk-xcgcdx61.js";import{Hm}from"/$bunfs/root/chunk-qbrmmydq.js";function t(){return process.stdout.isTTY===!0&&process.stderr.isTTY===!0}function e(r,n,i){return i===void 0||t()&&(i===""||!Hm())?`${r} ${n}`:i+n}function ux(r,n){return e(xe.tick,r,n)}function Td(r,n){return e(xe.cross,r,n)}function m_(r,n){return e(xe.warning,r,n)}function W8n(r){return`${t()?xe.circle:xe.cross} ${r}`}function IL(r){return`  ${t()?Hut:xe.pointer} ${r}`}function M2(r,n){return ux(t()?r.replace(/^Successfully (\p{Ll})/u,(i,s)=>s.toUpperCase()):r,n)}
export{ux,Td,m_,W8n,IL,M2};
