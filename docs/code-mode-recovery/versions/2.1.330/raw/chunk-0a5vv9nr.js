// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Se,zS}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Ere}from"/$bunfs/root/chunk-63s07fe6.js";function B7r(){return Se()&&!Ere(zS())}var t="No file is sent unless this call is allowed.";function zBa(o,e,s,n,r){let i=r?`${o}
${t}`:o;if(e)return{behavior:"ask",message:i,updatedInput:n,suppressAlwaysAllowRule:!0,defaultToNo:!0,decisionReason:{type:"safetyCheck",reason:i,classifierApprovable:!1}};return s.behavior==="allow"?s:{...s,message:i,updatedInput:n,decisionReason:s.decisionReason??{type:"other",reason:i}}}function VBa(o){let e=o?.checked?.note;return typeof e==="object"&&e!==null&&"connectorFiles"in e}
export{B7r,zBa,VBa};
