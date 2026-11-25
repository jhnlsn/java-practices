// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{u,m,l}from"/$bunfs/root/chunk-cqa9hrgx.js";import{I4i,O3i}from"/$bunfs/root/chunk-865at33z.js";import{ee,lC}from"/$bunfs/root/chunk-7cfjrnwy.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{wIi,kIi}from"/$bunfs/root/chunk-7d2qr9z5.js";import{hostname as a}from"os";var s=16;async function kKe(e,r){if(!wIi())return e;let n=null;try{n=await O3i(r)}catch{i(Error("[bridge] Could not read or create the machine id for the machine-id session tag; going on without it"))}if(n===null)return l("bridge_session_machine_tags","no_machine_id"),e;u("bridge_session_machine_tags");let t=e??[];return t.length>=s||t.some((o)=>o.startsWith(I4i))?e:[...t,I4i+n]}var d=128;function VSa(){if(!kIi())return;try{let e=ee(lC(a()),d).trim();return u("bridge_session_machine_name"),{machine_name:e||null}}catch{return i(Error("[bridge] Could not read the host name to report it")),m("bridge_session_machine_name","build_failed"),{machine_name:null}}}
export{kKe,VSa};
