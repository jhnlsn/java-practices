// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import*as r from"fs/promises";import*as o from"path";function ATr(e={}){return{fs:r,path:o,platform:()=>x(),...e}}async function RTr(e,t){return t.isRootNameExchangeable===!0?e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)),e.path.basename(t.realRoot)):e.fs.realpath(t.realRoot)}
export{ATr,RTr};
