// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
var hnn=10;function VTi(e){if(typeof e==="string")return s(e,9);if(!Array.isArray(e))return!1;let t=0;for(let r of e){if(t+=1,t>10)return!0;if(!F3e(r))continue;let n=r.text,o=0;while(t<=10){if(o=n.indexOf(`
`,o),o===-1)break;o++,t++}if(t>10)return!0}return!1}function F3e(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="text"&&"text"in e&&typeof e.text==="string"}function s(e,t){let r=0;for(let n=0;n<=t;n++){if(r=e.indexOf(`
`,r),r===-1)return!1;r++}return!0}
export{hnn,VTi,F3e};
