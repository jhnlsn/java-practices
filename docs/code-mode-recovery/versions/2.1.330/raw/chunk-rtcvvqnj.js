// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{yns,Yen,N_}from"/$bunfs/root/chunk-bzyb60p0.js";import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{to}from"/$bunfs/root/chunk-865at33z.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{nn,Ga}from"/$bunfs/root/chunk-xfj2cwfv.js";import{L_e}from"/$bunfs/root/chunk-xb56zerw.js";import{bGo}from"/$bunfs/root/chunk-8z8j7rfh.js";import{k8t}from"/$bunfs/root/chunk-sr1rbsf6.js";import{UV}from"/$bunfs/root/chunk-xhqwsnqh.js";async function wVs(e,o,a,{mayLoad:n=k8t,...s}={}){try{if(!await bGo(e,o,a,s))return!1;let r=await n();if(nn())return Ga();if(r){if(!to().builtinPluginsInitialized)L_e(),N_("built-ins registered ahead of a vcs raise");await yns(o,a)}return r}catch(r){return t(`mods not loaded ahead of ${e}: ${d(r)}`,{level:"warn"}),!1}}async function H8l(e,o){N_("moved into a mod's working copy"),await UV(()=>Yen(e,o)).catch(i)}
export{wVs,H8l};
