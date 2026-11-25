// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{fg}from"/$bunfs/root/chunk-f9x2f6cx.js";import{se,v0}from"/$bunfs/root/chunk-0rkwgmhx.js";import{ri}from"/$bunfs/root/chunk-qdcbcsg7.js";var n="Error POSTing to endpoint: MCP server not allowed";function q_l(t){if(!(t instanceof Error))return!1;let e=t.message.trimEnd();if(e===`Streamable HTTP error: ${n}`)return"code"in t&&t.code===403;if(e!==n)return!1;return"status"in t?t.status===403:("telemetryMessage"in t)&&typeof t.telemetryMessage==="string"&&t.telemetryMessage.startsWith("SdkHttpError ")}function nYe(){return(fg()??[]).find((t)=>t.name===ri)}function X1i(){return v0()?se().mcpEntryRowNotServed:null}function K0e(t){return X1i()===t}
export{q_l,nYe,X1i,K0e};
