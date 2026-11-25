// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{tm}from"/$bunfs/root/chunk-mzmcvr6c.js";import{randomUUID as s}from"crypto";var lMa=(e,t)=>({type:"system",subtype:"informational",content:`Started in the background: ${t}`,isMeta:!1,timestamp:new Date().toISOString(),uuid:s(),level:"info",launchedAgentId:e});function dMa(e){let n=e.type==="system"&&e.subtype==="informational"?e.launchedAgentId:void 0;return n!==void 0&&tm(n)!==null?n:void 0}
export{lMa,dMa};
