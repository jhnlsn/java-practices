// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{At}from"/$bunfs/root/chunk-pxy9yt8m.js";import{OA,Jd}from"/$bunfs/root/chunk-v16rzw0k.js";function bJe(){let e=At().defaultShell;if(e==="bash"&&!Jd())return"powershell";if(e==="powershell"&&!OA())return"bash";return e??(Jd()?"bash":"powershell")}
export{bJe};
