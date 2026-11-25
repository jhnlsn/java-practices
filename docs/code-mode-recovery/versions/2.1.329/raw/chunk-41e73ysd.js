// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{db}from"/$bunfs/root/chunk-p0t1g47r.js";var Wm=Symbol("untrustedArray.unreadable"),_2="<unreadable list>";function ak(e){let n;try{if(!Array.isArray(e))return;n=e.length}catch{return Wm}if(typeof n!=="number"||!Number.isSafeInteger(n)||n<0||n>db)return Wm;let u=[];for(let r=0;r<n;r++){let t;try{t=e[r]}catch{t=void 0}u.push(t)}return u}function jye(e){let n=ak(e);return n===Wm?void 0:n}
export{Wm,_2,ak,jye};
