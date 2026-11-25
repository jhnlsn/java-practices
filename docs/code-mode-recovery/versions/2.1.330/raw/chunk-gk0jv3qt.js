// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{huo}from"/$bunfs/root/chunk-wzzzxdne.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var pq=new ze(()=>({}));function wUe(e,o){let r=e?.servers.get(o.name);return r!==void 0&&o.config.type==="http"&&o.config.url===r.url&&e?.heldSinceBoot(o.name)===!0?r.server:void 0}var rye="claudecode/nobodyAsked",s=new WeakSet;function lBa(e){s.add(e)}function dBa(e){return s.has(e)}function qoi(e){return{source:"mcpServerPolicy",ruleBehavior:"ask",ruleValue:{toolName:e}}}function f8o(e,o){return{behavior:"ask",message:huo(e.name),decisionReason:{type:"rule",rule:qoi(o)}}}
export{rye,lBa,dBa,qoi,f8o,pq,wUe};
