// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{A}from"/$bunfs/root/chunk-avbzeyf3.js";var i=/[\u2018-\u201F]/;function Ntt(e,r="value"){let t=i.exec(e);if(t){let o=(t[0].codePointAt(0)??0).toString(16).toUpperCase().padStart(4,"0");throw new A(`Cannot safely quote ${r} in a PowerShell single-quoted string literal: it contains U+${o}, which PowerShell's tokenizer treats as a quote delimiter`,"psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)")}return`'${e.replaceAll("'","''")}'`}
export{Ntt};
