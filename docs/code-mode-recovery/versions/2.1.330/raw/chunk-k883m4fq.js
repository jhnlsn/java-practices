// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import o from"path";var De="Read",Mke="allow_large",RXe=new Set(["png","jpg","jpeg","gif","webp"]);function uct(t){let e=o.extname(t).toLowerCase().slice(1);return RXe.has(e)||e==="pdf"}
export{De,Mke,RXe,uct};
