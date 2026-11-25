// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{sep as c}from"path";var c5i=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),ERr=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,NGt=new RegExp(ERr,"g");function La(e){return i(e,!0)}function t7e(e){return i(e,!1)}function i(e,o){let t=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),n=t.replace(NGt,"");return(o?n.replace(/:.*$/,""):n).replace(/[. ]+$/,"")||t}function u5i(e){return!1}function n7e(e,o,t){let n=e.slice(o.length).split(c),a=n.length-1;for(let r=0;r<n.length;r++){let s=La(n[r]);if(c5i.has(s)||u5i(s))return!0;if(r===a&&t?.has(s))return!0}return!1}
export{c5i,ERr,NGt,La,t7e,u5i,n7e};
