// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ht}from"/$bunfs/root/chunk-fd03jnvq.js";import{r5}from"/$bunfs/root/chunk-aq3ms068.js";import{yH}from"/$bunfs/root/chunk-y3bkspwa.js";function kIi(e,o){if(yH({model:e,leanPrompt:o}))return'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';return r5()==="default"?n:t}var t=`- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`,n=`${t}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${ht} tool instead (if available)`;
export{kIi};
