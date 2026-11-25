// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{at}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Wt,Km,$f,$F}from"/$bunfs/root/chunk-e9fhcxkx.js";import{lbe,Ebs,OH}from"/$bunfs/root/chunk-aq3ms068.js";import{mg}from"/$bunfs/root/chunk-3p9hb8h6.js";import{Lco}from"/$bunfs/root/chunk-2nvq6he9.js";import{Ie}from"/$bunfs/root/chunk-b03afx74.js";function Ixi(t){let r=lbe.get(t)??Ebs.get(t);if(r===void 0)return[Wt,Km,$f,$F];return r===Wt?[Wt]:mg()?[Wt,r]:[r,Wt]}function Mxi(){return Ie("tengu_tidy_toast",{safe:!0})}function bsl(t,r){if(r.mcpInfo===void 0||!(Lco(t)||at()&&OH(t.config)))return;let o=r.mcpInfo.toolName;r.mcpInfo={...r.mcpInfo,standsInForBuiltIn:!0},r.hookMatcherFamilyNames=()=>at()&&!Mxi()?[]:Ixi(o)}
export{Ixi,Mxi,bsl};
