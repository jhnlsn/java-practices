// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{randomUUID as m}from"crypto";function lp(t,s,e){return{type:"system",subtype:"informational",content:t,isMeta:!1,timestamp:new Date().toISOString(),uuid:m(),level:s,...e&&{highlight:e}}}
export{lp};
