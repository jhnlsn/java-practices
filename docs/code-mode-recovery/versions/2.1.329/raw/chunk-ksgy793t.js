// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{wr}from"/$bunfs/root/chunk-m55722gg.js";import{r9,Ere}from"/$bunfs/root/chunk-92tjbk8v.js";var e=/[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;function Wke(t,n){if(typeof t!=="string")return"";let r=wr(t).replace(/\r$/,"");if(e.test(r))return"";if(n!==void 0)return r.trim()===""?"":Ere(r,n).trim();return r.trim()===""?"":r9(r).trim()}
export{Wke};
