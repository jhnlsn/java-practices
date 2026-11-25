// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{hn,b}from"/$bunfs/root/chunk-aq3ms068.js";import{Oe}from"/$bunfs/root/chunk-cqahc80t.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{x}from"/$bunfs/root/chunk-kg2zehkt.js";import{Mp}from"/$bunfs/root/chunk-kkvzvnqy.js";function Nl(e="send"){if(e==="send"&&Mp().messagingBeyondOwnAgentsDisabled)return!1;let r=s.CLAUDE_CODE_HARBOR_KITE;if(r!==void 0)return Oe(r);if(x()==="windows"&&!b("tengu_harbor_kite_win",!0))return!1;return b("tengu_harbor_kite",!0)}function nCe(e){if(e?.flagsSettled===!1&&hn("tengu_cuddly_willow",!0).source==="fallback")return!1;return b("tengu_cuddly_willow",!0)}var _hr="Cross-session messaging is not available in this session.";function C0e(){return b("tengu_ethereal_curry",!0)}
export{Nl,nCe,_hr,C0e};
