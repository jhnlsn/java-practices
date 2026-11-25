// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function Uut(t,r){switch(r){case"bash":return`!${t}`;default:return t}}function Qw(t){if(t.startsWith("!"))return"bash";return"prompt"}function MD(t){if(Qw(t)==="prompt")return t;return t.slice(1)}function tyn(t){return t==="!"}function Cma({nextValue:t,value:r,cursorOffset:n,mode:o}){let e=Qw(t);if(n!==0||e==="prompt"||e===o)return!1;return t.length===r.length+1||r.length===0}
export{Uut,Qw,MD,tyn,Cma};
