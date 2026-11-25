// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function WBr(n){return typeof n.content==="string"&&n.content.endsWith(`
`)&&typeof n.startLine==="number"&&typeof n.totalLines==="number"&&Math.max(1,n.startLine)+n.numLines>n.totalLines?n.numLines-1:n.numLines}
export{WBr};
