// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Qro}from"/$bunfs/root/chunk-avkdw0az.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var FV=new qe(()=>({}));function ZFe(e,o){let r=e?.servers.get(o.name);return r!==void 0&&o.config.type==="http"&&o.config.url===r.url&&e?.heldSinceBoot(o.name)===!0?r.server:void 0}var ege="claudecode/nobodyAsked",s=new WeakSet;function hIa(e){s.add(e)}function gIa(e){return s.has(e)}function Z7s(e){return{source:"mcpServerPolicy",ruleBehavior:"ask",ruleValue:{toolName:e}}}function Vzo(e,o){return{behavior:"ask",message:Qro(e.name),decisionReason:{type:"rule",rule:Z7s(o)}}}
export{ege,hIa,gIa,Z7s,Vzo,FV,ZFe};
