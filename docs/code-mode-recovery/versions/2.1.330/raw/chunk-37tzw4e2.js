// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Act}from"/$bunfs/root/chunk-f64qna2j.js";var I2s=/[\x00-\x08\x0b-\x1f\x7f-\x9f]/,r=new RegExp(`(?!${Act(";:")})${I2s.source}`,"g"),CIt=(e)=>e.replace(/\r\n?/g,`
`).replace(r,"");
export{I2s,CIt};
