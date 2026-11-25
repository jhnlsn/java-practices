// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{gk,eCl,TRe}from"/$bunfs/root/chunk-r3ggct44.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{At}from"/$bunfs/root/chunk-pxy9yt8m.js";import{nyo}from"/$bunfs/root/chunk-3e1bpcdj.js";function rae(i){return s.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??At()).disableBundledSkills===!0}var r_s="allow_bundled_skills";function zwt(){return!gk(r_s)}function t(){return eCl()??nyo}function ane(i){return zwt()&&!t().includes(i)}function NHe(i,e){return rae(e)||ane(i)}function fhl(){return TRe(r_s,"Bundled skills","are")}function N_o(){let i=zwt();return`${rae()}:${i}:${i?t().join(","):""}`}function o_s(i,e){return i.type==="prompt"&&i.source==="builtin"&&NHe(i.name,e)}
export{rae,r_s,zwt,ane,NHe,fhl,N_o,o_s};
