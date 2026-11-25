// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Wxr,J7e,gn,b}from"/$bunfs/root/chunk-865at33z.js";import{Ne}from"/$bunfs/root/chunk-69qhefwa.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import{Kp}from"/$bunfs/root/chunk-8ewjdpbn.js";import{KG}from"/$bunfs/root/chunk-pqpxa7em.js";function Hl(e="send"){if(e==="send"&&Kp().messagingBeyondOwnAgentsDisabled)return!1;let r=s.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return Ne(r);if(x()==="windows"&&!b("tengu_harbor_kite_win",!0))return!1;return b("tengu_harbor_kite",!0)}function yRe(e){if(J7e("tengu_cuddly_willow",!0))return!1;if(e?.flagsSettled===!1&&!(Wxr("tengu_cuddly_willow")===!0&&KG())&&gn("tengu_cuddly_willow",!0).source==="fallback")return!1;return b("tengu_cuddly_willow",!0)}var Akr="Cross-session messaging is not available in this session.";function z0e(){return b("tengu_ethereal_curry",!0)}
export{Hl,yRe,Akr,z0e};
