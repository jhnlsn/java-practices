// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function nct(){return!1}var s=/^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;function fc(){{let e=process.argv;if(e[2]!=="mcp"||e[3]!=="serve")return!1;let[,,t,...r]=e.slice(2),n=t==="--transport=http"?r:t==="--transport"&&r[0]==="http"?r.slice(1):void 0;return nct()&&n!==void 0&&n.every((o)=>s.test(o))}return!1}
export{nct,fc};
