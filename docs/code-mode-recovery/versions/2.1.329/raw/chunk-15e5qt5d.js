// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function mY(e){return typeof e==="string"&&e.startsWith("mcprs")?`mcpsrv${e.slice(5)}`:e}function Ig(e){return e.type==="claudeai-proxy"&&e.scope==="claudeai"&&e.id?mY(e.id):void 0}function hUt(e){return e?.type==="claudeai-proxy"||e?.type==="sdk"}
export{mY,Ig,hUt};
