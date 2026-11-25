// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Se}from"/$bunfs/root/chunk-kgzzwvwc.js";import{ct,_t,b,vh}from"/$bunfs/root/chunk-aq3ms068.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";function n(t){let e=t?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return b("tengu_pewter_owl_model","")}function o(t){if(s.CLAUDE_CODE_PEWTER_OWL!==void 0)return s.CLAUDE_CODE_PEWTER_OWL;if(Se())return!1;let e=vh(),r=n(e);if(r!==""&&!_t(ct()).includes(r))return!1;return b(`tengu_${t}`,!1)||e?.[t]===!0}function u_t(){if(s.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return s.CLAUDE_CODE_PEWTER_OWL_TOOL;return o("pewter_owl_tool")}function Lmi(){return o("pewter_owl_brief")}
export{u_t,Lmi};
