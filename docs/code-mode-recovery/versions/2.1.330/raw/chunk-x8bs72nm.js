// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ee}from"/$bunfs/root/chunk-7cfjrnwy.js";var Aht=2000,SY="[line break] ";function tqe(e,r=0){let t=Aht+(e.startsWith(SY,r)?SY.length:0);if(e.length-r<=t)return{code:e.slice(r),truncatedChars:0};let o=e.slice(r,r+t+1),n=ee(o,t);return{code:n,truncatedChars:e.length-r-n.length}}function Rht(e){return` \u2026 [+${e} chars]`}
export{Aht,SY,tqe,Rht};
