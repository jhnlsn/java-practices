// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{readFileSync as i}from"fs";import{readFile as d}from"fs/promises";import{isAbsolute as c,join as u}from"path";var g=[40,181,47,253];function s(r){return r.length>=4&&g.every((t,e)=>r[e]===t)}function o(r,t){return c(r)?r:u(t,r)}async function qln(r,t){let e=await d(o(r,t));return(s(e)?await Bun.zstdDecompress(e):e).toString("utf8")}function Wt(r,t){return $1i(r,t).toString("utf8")}function $1i(r,t){let e=o(r,t);try{let n=i(e);return s(n)?Bun.zstdDecompressSync(n):n}catch(n){throw Object.assign(Error("embedded asset is missing or corrupt",{cause:n}),{path:e})}}
export{qln,Wt,$1i};
