// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{sep as c}from"path";var ena=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),t0r=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,KJe=new RegExp(t0r,"g");function za(e){return i(e,!0)}function qJe(e){return i(e,!1)}function i(e,o){let t=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),n=t.replace(KJe,"");return(o?n.replace(/:.*$/,""):n).replace(/[. ]+$/,"")||t}function tna(e){return!1}function YJe(e,o,t){let n=e.slice(o.length).split(c),a=n.length-1;for(let r=0;r<n.length;r++){let s=za(n[r]);if(ena.has(s)||tna(s))return!0;if(r===a&&t?.has(s))return!0}return!1}
export{ena,t0r,KJe,za,qJe,tna,YJe};
