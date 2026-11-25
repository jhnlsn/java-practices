// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{st}from"/$bunfs/root/chunk-f9x2f6cx.js";import{Vt,sh,Zf,G1}from"/$bunfs/root/chunk-r8478wtb.js";import{_ke,Exs,oD}from"/$bunfs/root/chunk-865at33z.js";import{Fg}from"/$bunfs/root/chunk-ht78eyc4.js";import{tSo}from"/$bunfs/root/chunk-z1z1qsrb.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";function u1i(t){let r=_ke.get(t)??Exs.get(t);if(r===void 0)return[Vt,sh,Zf,G1];return r===Vt?[Vt]:Fg()?[Vt,r]:[r,Vt]}function f1i(){return Pe("tengu_tidy_toast",{safe:!0})}function u_l(t,r){if(r.mcpInfo===void 0||!(tSo(t)||st()&&oD(t.config)))return;let o=r.mcpInfo.toolName;r.mcpInfo={...r.mcpInfo,standsInForBuiltIn:!0},r.hookMatcherFamilyNames=()=>st()&&!f1i()?[]:u1i(o)}
export{u1i,f1i,u_l};
