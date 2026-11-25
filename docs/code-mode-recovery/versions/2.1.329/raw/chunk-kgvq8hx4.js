// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Rbi,tur}from"/$bunfs/root/chunk-bexqn652.js";var n="anthropic/shellDirectory",GIr="anthropic/shellDirectoryHeld",zta="anthropic/shellDirectoryMayBeMade",Vta="anthropic/shellDirectoryMadeAgain";function zIr(e,t){return{...e,_meta:{...e._meta,[n]:t}}}function Kta(e,t){return t.length<=Rbi&&!/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(t)&&t.startsWith(`${e}/`)&&t!==`${e}/.`&&tur(e,t.slice(e.length+1))!==void 0}
export{GIr,zta,Vta,zIr,Kta};
