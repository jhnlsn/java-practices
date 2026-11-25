// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var o=Symbol.for("claude-code.hostOnlyNativeTool");function Uul(e){return Object.defineProperty(e,o,{value:!0,enumerable:!0}),e}function m0(e){return o in e}function qf(e){return e.name?.startsWith("mcp__")||e.isMcp===!0}function Bul(e){return e.mcpInfo?.serverName??(e.name?.startsWith("mcp__")?e.name.split("__")[1]:void 0)}
export{Uul,m0,qf,Bul};
