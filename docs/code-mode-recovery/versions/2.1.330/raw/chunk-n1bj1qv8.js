// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{La,Me}from"/$bunfs/root/chunk-bzyb60p0.js";import{vo}from"/$bunfs/root/chunk-h4t4qfaq.js";import{randomUUID as a}from"crypto";var x4s="repl-error-";function uvn(e,{clientsDrawCalls:t,shownOnCall:s,stoppedBy:o,withheldScriptToolUseId:r}){let n=`${x4s}${a()}`,i=t&&{visibleToRemoteClients:!0};return[{...La({content:[{type:"tool_use",id:n,name:vo,input:{}}],isVirtual:!0}),...i,...s&&{scriptErrorCopy:!0}},{...Me({content:[{type:"tool_result",tool_use_id:n,content:e,is_error:!0}],toolUseResult:{error:e,...o!==void 0&&{stoppedBy:o},...s&&{shownOnCall:!0}},isVirtual:!0}),turnCompanion:!0,...i,...t&&{remoteToolResult:{kind:"stored",text:e}},...r!==void 0&&{withheldScriptToolUseId:r}}]}
export{x4s,uvn};
