// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{cDe}from"/$bunfs/root/chunk-aq3ms068.js";import{vq}from"/$bunfs/root/chunk-w03c3634.js";import{a2,iNt}from"/$bunfs/root/chunk-f74db37q.js";import{kEe}from"/$bunfs/root/chunk-hg1yqkjk.js";function M0r(i){let n="client_platform"in i?i.client_platform:void 0;return!(cDe("origin"in i?i.origin:void 0,"isSynthetic"in i&&Boolean(i.isSynthetic))||("is_meta"in i)&&i.is_meta===!0||("seeded_summon"in i)&&i.seeded_summon===!0||("client_composed"in i)&&i.client_composed===!0||("inbound_origin"in i)&&i.inbound_origin!==void 0||n!==void 0&&!(typeof n==="string"&&(a2(n)||iNt(n)))||vq(i)||kEe("initiator"in i&&typeof i.initiator==="string"?i.initiator:void 0)!==void 0)}
export{M0r};
