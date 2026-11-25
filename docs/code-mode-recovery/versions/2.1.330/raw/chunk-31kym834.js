// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{f}from"/$bunfs/root/chunk-78g0060s.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{Ef}from"/$bunfs/root/chunk-rb36kwbn.js";import{lk}from"/$bunfs/root/chunk-865at33z.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";import{readFile as s}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),a("tengu_dead_probe_adopt_ticks_token",{site:f(e)})}reset(){this.firedSites.clear()}}var l=new j(()=>new o);function u(){return l.of(N().host)}function yGs(e){u().fire(e)}async function D7n(e){return null}async function L9t(e,t,r){if(r!==void 0){if(await Ef(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(yGs("kill_gate"),await D7n(e)!==t)return}else return;await lk(e,"SIGTERM",{groupMembersByPidToo:!0}).catch(()=>{})}
export{yGs,D7n,L9t};
