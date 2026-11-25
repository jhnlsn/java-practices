// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{u}from"/$bunfs/root/chunk-y98mhv74.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{df}from"/$bunfs/root/chunk-5ghdkswv.js";import{Lw}from"/$bunfs/root/chunk-aq3ms068.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";import{readFile as s}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),a("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new j(()=>new o);function f(){return l.of(N().host)}function XLs(e){f().fire(e)}async function Zqn(e){return null}async function EKt(e,t,r){if(r!==void 0){if(await df(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(XLs("kill_gate"),await Zqn(e)!==t)return}else return;await Lw(e,"SIGTERM",{groupMembersByPidToo:!0}).catch(()=>{})}
export{XLs,Zqn,EKt};
