// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xat}from"/$bunfs/root/chunk-4vsz8a99.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var t=new ze(()=>({byToolUse:new Map}));function Vni(n,e,i){t.of(n).byToolUse.set(e,i),xat(n,e,()=>{Q8r(n,e)})}function Q8r(n,e){t.peek(n)?.byToolUse.delete(e)}function Kni(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function qni(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return Q8r(n,e),i}
export{Vni,Q8r,Kni,qni};
