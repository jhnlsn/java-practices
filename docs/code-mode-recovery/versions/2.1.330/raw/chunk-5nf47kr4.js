// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{hk,oNl,NPe}from"/$bunfs/root/chunk-2zeyvjwb.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{vt}from"/$bunfs/root/chunk-2yx6c1y2.js";import{hCo}from"/$bunfs/root/chunk-tkv5z5dk.js";function Xre(i){return s.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??vt()).disableBundledSkills===!0}var YTs="allow_bundled_skills";function HTt(){return!hk(YTs)}function t(){return oNl()??hCo}function Jre(i){return HTt()&&!t().includes(i)}function nNe(i,e){return Xre(e)||Jre(i)}function eAl(){return NPe(YTs,"Bundled skills","are")}function JTo(){let i=HTt();return`${Xre()}:${i}:${i?t().join(","):""}`}function XTs(i,e){return i.type==="prompt"&&i.source==="builtin"&&nNe(i.name,e)}
export{Xre,YTs,HTt,Jre,nNe,eAl,JTo,XTs};
