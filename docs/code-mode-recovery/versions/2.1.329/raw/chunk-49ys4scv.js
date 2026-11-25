// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Qa}from"/$bunfs/root/chunk-4h07yrpp.js";var N1=8;function Z6r(e,n){let o=[],t="",r=0;for(let u of e){let s=l(u);if(r+s>n&&t!=="")o.push(t),t="",r=0;t+=u,r+=s}return o.push(t),o}function d8s(e,n){let o=[],t="",r=0;for(let{segment:u}of Qa().segment(e)){let s=0;for(let c of u)s+=l(c);if(s>n){for(let c of Z6r(t+u,n))o.push(c);t=o.pop()??"",r=XQe(t);continue}if(r+s>n&&t!=="")o.push(t),t="",r=0;t+=u,r+=s}return o.push(t),o}function l(e){return e.length===1&&e<"\x80"?1:2}function XQe(e){let n=0;for(let o of e)n+=l(o);return n}
export{N1,Z6r,d8s,XQe};
