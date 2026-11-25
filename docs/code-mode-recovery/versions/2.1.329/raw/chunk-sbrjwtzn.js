// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{eGe}from"/$bunfs/root/chunk-k936fbc4.js";var SLi=new RegExp(`[\\p{Cc}\\p{Cf}\\p{Zl}\\p{Zp}${eGe}\\u2800]|(?!\\u0020)\\p{Zs}`,"u");var t=new RegExp(`${SLi.source}|\\p{Cs}`,"u"),i=new RegExp(t.source,"gu");function aT(n){return t.test(n)}function i9e(n,e){return n.split(/\r?\n/).some(aT)?`${e} is not shown here because it holds hidden or control characters`:n}function zM(n){return aT(n)?"a path not shown here because it holds hidden or control characters":n}
export{SLi,aT,i9e,zM};
