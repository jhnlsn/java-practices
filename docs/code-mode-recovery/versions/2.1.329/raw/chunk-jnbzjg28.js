// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ee}from"/$bunfs/root/chunk-m55722gg.js";var Xut=2000,x9="[line break] ";function a6e(r,t=0){let e=Xut+(r.startsWith(x9,t)?x9.length:0);if(r.length-t<=e)return{code:r.slice(t),truncatedChars:0};let o=r.slice(t,t+e+1),n=ee(o,e);return{code:n,truncatedChars:r.length-t-n.length}}function Jut(r){return` \u2026 [+${r} chars]`}
export{Xut,x9,a6e,Jut};
