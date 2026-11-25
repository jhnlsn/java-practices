// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{TU}from"/$bunfs/root/chunk-bxxahqqj.js";import{Yer,Sce,ww}from"/$bunfs/root/chunk-hg1yqkjk.js";import{Fl}from"/$bunfs/root/chunk-c0v81j9q.js";import{cWs}from"/$bunfs/root/chunk-r6ddyr14.js";import{Xa}from"/$bunfs/root/chunk-09zj247f.js";import{Gr}from"/$bunfs/root/chunk-7b3h6etb.js";function UVt(o,e=!1){return r(o,[...Xa()?Sce():[],...Yer()?[ww]:[],...Fl()?(TU()??[]).filter(cWs):[],...e?l():[]])}function l(){return[]}function Vsa(o,e){return r(o,[...Xa()?Sce():[],...Yer()&&!s.CLAUDE_CODE_SIMPLE?[ww]:[]].filter((t)=>t.isEnabled()&&!Gr(e,t)))}function r(o,e){if(e.length===0)return o;let t=new Set(o.map((i)=>i.name)),n=e.filter((i)=>!t.has(i.name));return n.length>0?[...o,...n]:o}
export{UVt,Vsa};
