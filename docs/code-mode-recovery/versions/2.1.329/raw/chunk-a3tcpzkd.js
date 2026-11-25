// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Otn}from"/$bunfs/root/chunk-crt5y45a.js";function k4(e,n){return e.config.scope===n.scope&&e.config.pluginSource===n.pluginSource&&e.config.readFrom===n.readFrom?e:{...e,config:n}}function Czo(e,n){let o=Otn(e.config),r=n?.find((i)=>i.name===e.name&&Otn(i.config)===o);return r===void 0?e:k4(e,r.config)}
export{k4,Czo};
