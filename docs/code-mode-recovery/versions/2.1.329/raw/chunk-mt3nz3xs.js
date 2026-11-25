// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Hr}from"/$bunfs/root/chunk-e45mjesc.js";var r=/@sha256:[0-9a-f]{64}$/;function Unt(n){return r.test(n)}function gJa(n){let[e,...i]=n.suggestions??[],t=i.length===0&&e?.type==="addRules"&&e.behavior==="allow"&&e.rules.length===1?e.rules[0]:void 0;return t?.toolName===Hr&&t.ruleContent!==void 0&&r.test(t.ruleContent)?t.ruleContent:void 0}var _Ja="userSettings";function fTe(n){if(n.metadata?.mcpSkill===void 0)return;let e=void 0;return{rule:e===void 0?void 0:{toolName:Hr,ruleContent:e}}}
export{Unt,gJa,_Ja,fTe};
