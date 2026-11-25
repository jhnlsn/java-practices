// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{b}from"/$bunfs/root/chunk-aq3ms068.js";function t(){return b("tengu_mcp_claudeai_eligibility_gate",!1)}function _xa(){return b("tengu_delightful_hamster",!1)===!0}function tVr(e){return e.type==="claudeai-proxy"&&e.eligible===!1&&t()}function BFe(e,n){return e===n||e?.type==="connected"&&n?.type==="connected"&&e.client===n.client}
export{BFe,_xa,tVr};
