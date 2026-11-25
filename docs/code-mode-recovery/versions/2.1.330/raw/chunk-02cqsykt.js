// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Se}from"/$bunfs/root/chunk-f9x2f6cx.js";import{dt,St,b,X_}from"/$bunfs/root/chunk-865at33z.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";function n(t){let e=t?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return b("tengu_pewter_owl_model","")}function o(t){if(s.CLAUDE_CODE_PEWTER_OWL!==void 0)return s.CLAUDE_CODE_PEWTER_OWL;if(Se())return!1;let e=X_(),r=n(e);if(r!==""&&!St(dt()).includes(r))return!1;return b(`tengu_${t}`,!1)||e?.[t]===!0}function vWe(){if(s.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return s.CLAUDE_CODE_PEWTER_OWL_TOOL;return o("pewter_owl_tool")}function Wvi(){return o("pewter_owl_brief")}
export{vWe,Wvi};
