// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Eq}from"/$bunfs/root/chunk-w03c3634.js";import{lu}from"/$bunfs/root/chunk-r3zpj4t6.js";import{n6e}from"/$bunfs/root/chunk-z3zbz553.js";var o=48;function f9n(r){return Eq(n6e(r)).replace(/[\s\u2800]+/g," ").trim()}function S$r(r,t){let n=lu(f9n(t),o,{hard:!0,trim:!0}).split(`
`);return[r,...n.map((i)=>`\u2502 ${i}`)].join(`
`)}
export{f9n,S$r};
