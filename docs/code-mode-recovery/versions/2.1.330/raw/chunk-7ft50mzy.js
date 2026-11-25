// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ir}from"/$bunfs/root/chunk-7cfjrnwy.js";import{R3,x3}from"/$bunfs/root/chunk-sah8dzn4.js";var e=/[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;function Jve(t,n){if(typeof t!=="string")return"";let r=Ir(t).replace(/\r$/,"");if(e.test(r))return"";if(n!==void 0)return r.trim()===""?"":x3(r,n).trim();return r.trim()===""?"":R3(r).trim()}
export{Jve};
