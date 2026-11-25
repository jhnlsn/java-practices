// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{S,f}from"/$bunfs/root/chunk-78g0060s.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{_gt,K_e,fie,Q4o,Z4o}from"/$bunfs/root/chunk-ag2pf657.js";var hgt={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function Rnr(){return Q4o()==="user"?o:t}function R5r(e){return K_e()!=="unset"||Z4o()||e}function x5r(){return K_e()==="accepted"||Z4o()}async function P5r(e){if(e==="accepted"&&fie())return"forbidden";let n=e==="accepted"?"accepted":K_e()==="accepted"?"revoked":"declined";if(!await _gt(e))return"not_saved";return a("tengu_served_unattended_consent",{action:f(n),surface:S("cli")}),"saved"}
export{hgt,Rnr,R5r,x5r,P5r};
