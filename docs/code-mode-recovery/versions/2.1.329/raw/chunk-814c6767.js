// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Y_}from"/$bunfs/root/chunk-e6ag0pqy.js";import{b}from"/$bunfs/root/chunk-aq3ms068.js";import{sV}from"/$bunfs/root/chunk-phb99ctz.js";import{na}from"/$bunfs/root/chunk-hg1yqkjk.js";import{l6e}from"/$bunfs/root/chunk-jkp22nmt.js";function P9n(s,o,n,e,i){return e||Y_(n)||s.suppressesAlwaysAllowRule?.(o,!b("tengu_valiant_crayon",!1))===!0&&!(i??[]).some((r)=>(r.type==="addRules"||r.type==="replaceRules")&&r.behavior==="allow"&&r.rules.some((t)=>t.ruleContent!==void 0))||void 0}function eBr(s,o,n,e,i){return e.ruleUsuallyOffered===!0&&e.suppressAlwaysAllowRule===!0&&e.defaultToNo!==!0&&e.hooksMayRefuse!==!0&&e.oneTimeAnswersOnly!==!0&&na(e.decisionReason,(r)=>!r.classifierApprovable)===void 0&&P9n(s,o,n,!1,i)===void 0||void 0}function tBr(s,o,n,e){return e.suggestions}function Qyn(s,o,n){if(na(s.decisionReason,sV)!==void 0||l6e(n))return!0;if(o.requiresUserInteraction?.())return!0;return s.forcedByCaller===!0||s.personOnly===!0}
export{P9n,eBr,tBr,Qyn};
