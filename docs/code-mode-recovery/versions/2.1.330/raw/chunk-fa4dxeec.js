// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_t}from"/$bunfs/root/chunk-060xwhvh.js";import{B9}from"/$bunfs/root/chunk-865at33z.js";import{R0}from"/$bunfs/root/chunk-ge3qft6b.js";function qUi(e,o){if(R0({model:e,leanPrompt:o}))return'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';return B9()==="default"?n:t}var t=`- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,n=`${t}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${_t} tool instead (if available)`;
export{qUi};
