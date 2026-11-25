// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function j2t(n){return n.birthtimeNs>0n&&n.birthtimeNs!==n.ctimeNs?n.birthtimeNs.toString():void 0}function xEl(n,i,t){return u(`${n.dev}:${n.ino}`,i)&&(t===void 0||n.birthtimeNs.toString()===t)}function r(n){return n>=-(2n**63n)&&n<-1n?n+2n**64n:n}function $vt(n,i){return r(n)===r(i)}var s=/^(-?\d+):(-?[1-9]\d{0,19})$/;function u(n,i){let[t,e]=[n,i].map((o)=>s.exec(o));return t==null||e==null?n===i:t[1]===e[1]&&$vt(BigInt(t[2]),BigInt(e[2]))}
export{j2t,xEl,$vt};
