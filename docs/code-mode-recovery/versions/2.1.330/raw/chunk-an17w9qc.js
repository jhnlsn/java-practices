// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ul}from"/$bunfs/root/chunk-em52jhgp.js";var $$=8;function nYr(e,n){let o=[],t="",r=0;for(let u of e){let s=l(u);if(r+s>n&&t!=="")o.push(t),t="",r=0;t+=u,r+=s}return o.push(t),o}function rri(e,n){let o=[],t="",r=0;for(let{segment:u}of ul().segment(e)){let s=0;for(let c of u)s+=l(c);if(s>n){for(let c of nYr(t+u,n))o.push(c);t=o.pop()??"",r=Xqe(t);continue}if(r+s>n&&t!=="")o.push(t),t="",r=0;t+=u,r+=s}return o.push(t),o}function l(e){return e.length===1&&e<"\x80"?1:2}function Xqe(e){let n=0;for(let o of e)n+=l(o);return n}
export{$$,nYr,rri,Xqe};
