// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{f,m,l}from"/$bunfs/root/chunk-3mgc6ahd.js";import{dBi,lWi}from"/$bunfs/root/chunk-aq3ms068.js";import{ee,kT}from"/$bunfs/root/chunk-m55722gg.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{jwi,Gwi}from"/$bunfs/root/chunk-4yjmbvsy.js";import{hostname as a}from"os";var s=16;async function Dze(e,r){if(!jwi())return e;let n=null;try{n=await lWi(r)}catch{i(Error("[bridge] Could not read or create the machine id for the machine-id session tag; going on without it"))}if(n===null)return l("bridge_session_machine_tags","no_machine_id"),e;f("bridge_session_machine_tags");let t=e??[];return t.length>=s||t.some((o)=>o.startsWith(dBi))?e:[...t,dBi+n]}var d=128;function tca(){if(!Gwi())return;try{let e=ee(kT(a()),d).trim();return f("bridge_session_machine_name"),{machine_name:e||null}}catch{return i(Error("[bridge] Could not read the host name to report it")),m("bridge_session_machine_name","build_failed"),{machine_name:null}}}
export{Dze,tca};
