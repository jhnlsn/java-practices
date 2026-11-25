// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Se,_S}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Pte}from"/$bunfs/root/chunk-fazeggk5.js";function YKr(){return Se()&&!Pte(_S())}var r="No file is sent unless this call is allowed.";function TIa(i,e,o,n){let s=`${i}
${r}`;if(e)return{behavior:"ask",message:s,updatedInput:n,suppressAlwaysAllowRule:!0,defaultToNo:!0,decisionReason:{type:"safetyCheck",reason:s,classifierApprovable:!1}};return o.behavior==="allow"?o:{...o,message:s,updatedInput:n,decisionReason:o.decisionReason??{type:"other",reason:s}}}function CIa(i){let e=i?.checked?.note;return typeof e==="object"&&e!==null&&"connectorFiles"in e}
export{YKr,TIa,CIa};
