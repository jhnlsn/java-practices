// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{NS}from"/$bunfs/root/chunk-k886eq88.js";var Qm=Symbol("untrustedArray.unreadable"),LG="<unreadable list>";function jk(e){let n;try{if(!Array.isArray(e))return;n=e.length}catch{return Qm}if(typeof n!=="number"||!Number.isSafeInteger(n)||n<0||n>NS)return Qm;let u=[];for(let r=0;r<n;r++){let t;try{t=e[r]}catch{t=void 0}u.push(t)}return u}function Jbe(e){let n=jk(e);return n===Qm?void 0:n}
export{Qm,LG,jk,Jbe};
