// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{vg}from"/$bunfs/root/chunk-kgzzwvwc.js";import{oe,fH}from"/$bunfs/root/chunk-chsxmm1h.js";import{Ws}from"/$bunfs/root/chunk-agyyqm1q.js";var n="Error POSTing to endpoint: MCP server not allowed";function ril(t){if(!(t instanceof Error))return!1;let e=t.message.trimEnd();if(e===`Streamable HTTP error: ${n}`)return"code"in t&&t.code===403;if(e!==n)return!1;return"status"in t?t.status===403:("telemetryMessage"in t)&&typeof t.telemetryMessage==="string"&&t.telemetryMessage.startsWith("SdkHttpError ")}function d5e(){return(vg()??[]).find((t)=>t.name===Ws)}function yPi(){return fH()?oe().mcpEntryRowNotServed:null}function R0e(t){return yPi()===t}
export{ril,d5e,yPi,R0e};
