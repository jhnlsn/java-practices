// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
function Qnr(t,o,n,r){return new Promise((e,s)=>{t.sendControlRequest(o,{...r,whileAsleep:{onStored:e,onRefused:n}}).then(()=>e(),s)})}
export{Qnr};
