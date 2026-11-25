// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{OU}from"/$bunfs/root/chunk-4vsz8a99.js";import{Par,dfe,qw}from"/$bunfs/root/chunk-bzyb60p0.js";import{rd}from"/$bunfs/root/chunk-pkzhb7kv.js";import{Yqs}from"/$bunfs/root/chunk-9jr493jm.js";import{Oa}from"/$bunfs/root/chunk-w50zedgp.js";import{Tr}from"/$bunfs/root/chunk-ht27b0vz.js";function F5t(o,e=!1){return r(o,[...Oa()?dfe():[],...Par()?[qw]:[],...rd()?(OU()??[]).filter(Yqs):[],...e?l():[]])}function l(){return[]}function Gga(o,e){return r(o,[...Oa()?dfe():[],...Par()&&!s.CLAUDE_CODE_SIMPLE?[qw]:[]].filter((t)=>t.isEnabled()&&!Tr(e,t)))}function r(o,e){if(e.length===0)return o;let t=new Set(o.map((i)=>i.name)),n=e.filter((i)=>!t.has(i.name));return n.length>0?[...o,...n]:o}
export{F5t,Gga};
