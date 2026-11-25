// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function pht(t,r){switch(r){case"bash":return`!${t}`;default:return t}}function Rk(t){if(t.startsWith("!"))return"bash";return"prompt"}function WL(t){if(Rk(t)==="prompt")return t;return t.slice(1)}function WEn(t){return t==="!"}function TTa({nextValue:t,value:r,cursorOffset:n,mode:o}){let e=Rk(t);if(n!==0||e==="prompt"||e===o)return!1;return t.length===r.length+1||r.length===0}
export{pht,Rk,WL,WEn,TTa};
