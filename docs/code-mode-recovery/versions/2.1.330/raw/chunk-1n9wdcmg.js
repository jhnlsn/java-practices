// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{OP,ldo,K1t,Urn}from"/$bunfs/root/chunk-y8kqnbqt.js";function Iy(n,i,o){let g=ldo(OP),e=K1t(n,i,g);if(e===void 0){let t=`${n}:${i}`,d=OP.loggedShortcutFallbacks;if(!d.has(t))d.add(t),Urn(n,i,o,"action_not_found");return o}return e===null?"":e}
export{Iy};
