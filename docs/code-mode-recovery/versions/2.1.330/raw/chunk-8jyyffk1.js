// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{vt}from"/$bunfs/root/chunk-2yx6c1y2.js";import{vR,Gd}from"/$bunfs/root/chunk-wwft95x8.js";function met(){let e=vt().defaultShell;if(e==="bash"&&!Gd())return"powershell";if(e==="powershell"&&!vR())return"bash";return e??(Gd()?"bash":"powershell")}
export{met};
