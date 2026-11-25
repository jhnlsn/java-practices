// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{hp}from"/$bunfs/root/chunk-0ha8wex8.js";import{createHash as o}from"crypto";var C7t="This tool call was cancelled.";function B$e(r,t){let e=o("sha256").update(`${t}:${r}`).digest("hex");return`${e.slice(0,8)}-${e.slice(8,12)}-4${e.slice(13,16)}-8${e.slice(17,20)}-${e.slice(20,32)}`}function m4r(r){return r===hp?"User rejected tool use":`Error: ${r.replace(/^<tool_use_error>|<\/tool_use_error>$/g,"")}`}
export{C7t,B$e,m4r};
