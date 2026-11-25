// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{S,u}from"/$bunfs/root/chunk-y98mhv74.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{Lft,Whe,koe,Tjo,Cjo}from"/$bunfs/root/chunk-dtf9v4kj.js";var Hft={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function W7n(){return Tjo()==="user"?o:t}function HGr(e){return Whe()!=="unset"||Cjo()||e}function DGr(){return Whe()==="accepted"||Cjo()}async function LGr(e){if(e==="accepted"&&koe())return"forbidden";let n=e==="accepted"?"accepted":Whe()==="accepted"?"revoked":"declined";if(!await Lft(e))return"not_saved";return a("tengu_served_unattended_consent",{action:u(n),surface:S("cli")}),"saved"}
export{Hft,W7n,HGr,DGr,LGr};
