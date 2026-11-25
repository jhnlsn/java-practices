// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ar}from"/$bunfs/root/chunk-n5qd9b6p.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";var n=3;var _="tengu_hazel_trellis";function MP(){let e=s.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(e!==void 0)return e;let t=Ar();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:a}=import.meta.require("/$bunfs/root/chunk-vgvexp78.js"),{getCachedClientData:A}=import.meta.require("/$bunfs/root/chunk-zd7jjspn.js"),o=A()?.[_],r=u(o)?o:a(_,n);t.maxSubagentSpawnDepthFromGrowthBook=u(r)?r:n}return t.maxSubagentSpawnDepthFromGrowthBook}function u(e){return typeof e==="number"&&Number.isInteger(e)&&e>=1}
export{MP};
