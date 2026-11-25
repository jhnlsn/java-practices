// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ANe}from"/$bunfs/root/chunk-865at33z.js";import{J4}from"/$bunfs/root/chunk-xfj2cwfv.js";import{vG,FUt}from"/$bunfs/root/chunk-npsm5tcc.js";import{Rie}from"/$bunfs/root/chunk-bzyb60p0.js";function Q$r(i){let n="client_platform"in i?i.client_platform:void 0;return!(ANe("origin"in i?i.origin:void 0,"isSynthetic"in i&&Boolean(i.isSynthetic))||("is_meta"in i)&&i.is_meta===!0||("seeded_summon"in i)&&i.seeded_summon===!0||("client_composed"in i)&&i.client_composed===!0||("inbound_origin"in i)&&i.inbound_origin!==void 0||n!==void 0&&!(typeof n==="string"&&(vG(n)||FUt(n)))||J4(i)||Rie("initiator"in i&&typeof i.initiator==="string"?i.initiator:void 0)!==void 0)}
export{Q$r};
