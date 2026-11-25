// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{pf,t3t,kaa,vaa}from"/$bunfs/root/chunk-f9x2f6cx.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{u}from"/$bunfs/root/chunk-cqa9hrgx.js";import{nn}from"/$bunfs/root/chunk-xfj2cwfv.js";import{Ree}from"/$bunfs/root/chunk-2zeyvjwb.js";import{Zyi,yc}from"/$bunfs/root/chunk-ky5sghtd.js";import{uY}from"/$bunfs/root/chunk-3jkk3v3z.js";import{be,H,It,Ot,G}from"/$bunfs/root/chunk-bs4h6795.js";G();var m={keep:"none"};function n(){if(yc().capabilities.now("programStatus"))return Zyi;return s.CLAUDE_CODE_DISABLE_TERMINAL_TITLE?m:kaa()}function S(t){let{capabilities:e}=yc(),r=[e.onSettle("programStatus",t),vaa(t)];return()=>r.forEach((o)=>o())}function kwn(){return Ot(S,n)}function Ewn(t,e){let r=be(uY);kwn(),It(()=>t&&yc().programStatus.show({root:t,main:e})),H(()=>i(r)),H(()=>()=>i(r),[r])}function i(t){if(!t||nn())return;let{programStatus:e}=yc(),{hasReported:r}=e,o=pf()!==null&&t3t(),a=e.update(n(),o,Ree());if(a!==""){if(t(a),!r)u("terminal_program_status")}}
export{kwn,Ewn};
