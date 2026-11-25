// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_,cs}from"/$bunfs/root/chunk-w578pjby.js";import{yge}from"/$bunfs/root/chunk-0jve1fep.js";var s=/[\x7f-\x9f]/g,o=(e)=>e.replace(s,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function _Yr(e){return e.replace(c,"")}function eJt(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=yge(e);if(r!==null)return r;return Object.entries(e).map(([t,i])=>H9o(t,i,{verbose:n})).join(", ")}function H9o(e,n,{verbose:r}){let t=o(_(n));return`${o(cs(e).slice(1,-1))}: ${t}`}
export{_Yr,eJt,H9o};
