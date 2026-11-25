// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{lan}from"/$bunfs/root/chunk-3bjtjsgp.js";function t5(e,n){return e.config.scope===n.scope&&e.config.pluginSource===n.pluginSource&&e.config.readFrom===n.readFrom?e:{...e,config:n}}function i8o(e,n){let o=lan(e.config),r=n?.find((i)=>i.name===e.name&&lan(i.config)===o);return r===void 0?e:t5(e,r.config)}
export{t5,i8o};
