// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
var fG=300000,SR=3600000;function jot(e){if((e?.cache_creation?.ephemeral_5m_input_tokens??0)>0)return"5m";return(e?.cache_creation?.ephemeral_1h_input_tokens??0)>0?"1h":void 0}
export{fG,SR,jot};
