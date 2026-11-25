// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{V6e}from"/$bunfs/root/chunk-kx2fp6pc.js";var zGi=new RegExp(`[\\p{Cc}\\p{Cf}\\p{Zl}\\p{Zp}${V6e}\\u2800]|(?!\\u0020)\\p{Zs}`,"u");var t=new RegExp(`${zGi.source}|\\p{Cs}`,"u"),i=new RegExp(t.source,"gu");function GT(n){return t.test(n)}function e7e(n,e){return n.split(/\r?\n/).some(GT)?`${e} is not shown here because it holds hidden or control characters`:n}function mM(n){return GT(n)?"a path not shown here because it holds hidden or control characters":n}
export{zGi,GT,e7e,mM};
