// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ete,rse}from"/$bunfs/root/chunk-6jhnd2zy.js";function p(r){return r!=null&&typeof r=="object"}var $z=p;var s="[object Symbol]";function l(r){return typeof r=="symbol"||$z(r)&&rse(r)==s}var Uz=l;var y=Array.isArray,tE=y;function b(r,t){var o=-1,i=r==null?0:r.length,n=Array(i);while(++o<i)n[o]=t(r[o],o,r);return n}var cJ=b;var u=1/0,e=ete?ete.prototype:void 0,f=e?e.toString:void 0;function m(r){if(typeof r=="string")return r;if(tE(r))return cJ(r,m)+"";if(Uz(r))return f?f.call(r):"";var t=r+"";return t=="0"&&1/r==-u?"-0":t}var tLs=m;function a(r){return r==null?"":tLs(r)}var uJ=a;
export{cJ,tE,$z,Uz,tLs,uJ};
