// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{FRe}from"/$bunfs/root/chunk-pxy9yt8m.js";import{By}from"/$bunfs/root/chunk-bpdncsrm.js";function VF(){let{forceLoginMethod:o,forceLoginGatewayUrl:e}=FRe();return o==="gateway"||e!==void 0}function Rat(){return!s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!n()&&VF()}function n(){return By.some((o)=>s[o])}
export{VF,Rat};
