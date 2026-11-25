// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var o=Symbol.for("claude-code.hostOnlyNativeTool");function JZa(e){return Object.defineProperty(e,o,{value:!0,enumerable:!0}),e}function eH(e){return o in e}function Kf(e){return e.name?.startsWith("mcp__")||e.isMcp===!0}function QZa(e){return e.mcpInfo?.serverName??(e.name?.startsWith("mcp__")?e.name.split("__")[1]:void 0)}
export{JZa,eH,Kf,QZa};
