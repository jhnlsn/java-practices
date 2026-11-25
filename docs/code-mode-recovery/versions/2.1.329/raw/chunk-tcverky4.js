// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ju,ZPr,DXi,NXi}from"/$bunfs/root/chunk-kgzzwvwc.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{jli,pc}from"/$bunfs/root/chunk-qgx0rrv2.js";import{f}from"/$bunfs/root/chunk-3mgc6ahd.js";import{ln}from"/$bunfs/root/chunk-w03c3634.js";import{BQ}from"/$bunfs/root/chunk-r3ggct44.js";import{k9}from"/$bunfs/root/chunk-2kad367j.js";import{be,H,xt,Pt,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();var m={keep:"none"};function n(){if(pc().capabilities.now("programStatus"))return jli;return s.CLAUDE_CODE_DISABLE_TERMINAL_TITLE?m:DXi()}function u(t){let{capabilities:e}=pc(),r=[e.onSettle("programStatus",t),NXi(t)];return()=>r.forEach((o)=>o())}function Lhn(){return Pt(u,n)}function Nhn(t,e){let r=be(k9);Lhn(),xt(()=>t&&pc().programStatus.show({root:t,main:e})),H(()=>i(r)),H(()=>()=>i(r),[r])}function i(t){if(!t||ln())return;let{programStatus:e}=pc(),{hasReported:r}=e,o=Ju()!==null&&ZPr(),a=e.update(n(),o,BQ());if(a!==""){if(t(a),!r)f("terminal_program_status")}}
export{Lhn,Nhn};
