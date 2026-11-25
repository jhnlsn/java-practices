// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{rj}from"/$bunfs/root/chunk-p5gw27ta.js";import{gZ}from"/$bunfs/root/chunk-fbe2kvqn.js";var p=Array.isArray,bk=p;function l(r,t){var o=-1,n=r==null?0:r.length,i=Array(n);while(++o<n)i[o]=t(r[o],o,r);return i}var b7=l;var s=1/0,e=gZ?gZ.prototype:void 0,f=e?e.toString:void 0;function m(r){if(typeof r=="string")return r;if(bk(r))return b7(r,m)+"";if(rj(r))return f?f.call(r):"";var t=r+"";return t=="0"&&1/r==-s?"-0":t}var VAs=m;function u(r){return r==null?"":VAs(r)}var w7=u;
export{b7,bk,VAs,w7};
