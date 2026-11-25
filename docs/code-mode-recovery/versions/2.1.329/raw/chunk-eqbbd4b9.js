// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_,ts}from"/$bunfs/root/chunk-c2c9kwmh.js";import{yme}from"/$bunfs/root/chunk-pwxp2pn6.js";var s=/[\x7f-\x9f]/g,o=(e)=>e.replace(s,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function sVr(e){return e.replace(c,"")}function V5t(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=yme(e);if(r!==null)return r;return Object.entries(e).map(([t,i])=>VGo(t,i,{verbose:n})).join(", ")}function VGo(e,n,{verbose:r}){let t=o(_(n));return`${o(ts(e).slice(1,-1))}: ${t}`}
export{sVr,V5t,VGo};
