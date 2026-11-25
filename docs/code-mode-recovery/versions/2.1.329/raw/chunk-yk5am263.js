// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Re}from"/$bunfs/root/chunk-q8cqeydt.js";import{clt}from"/$bunfs/root/chunk-t39fw2cy.js";import{Am}from"/$bunfs/root/chunk-050v0fjh.js";function t(){return process.stdout.isTTY===!0&&process.stderr.isTTY===!0}function e(r,n,i){return i===void 0||t()&&(i===""||!Am())?`${r} ${n}`:i+n}function bx(r,n){return e(Re.tick,r,n)}function nd(r,n){return e(Re.cross,r,n)}function Kg(r,n){return e(Re.warning,r,n)}function yKn(r){return`${t()?Re.circle:Re.cross} ${r}`}function ED(r){return`  ${t()?clt:Re.pointer} ${r}`}function Ej(r,n){return bx(t()?r.replace(/^Successfully (\p{Ll})/u,(i,s)=>s.toUpperCase()):r,n)}
export{bx,nd,Kg,yKn,ED,Ej};
