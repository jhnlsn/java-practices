// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d,w}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";function c(){return import.meta.require("/$bunfs/root/chunk-qcps5h21.js")}async function Fd(e,i){let o=await c().lock(e,i);return Object.assign(o,{[Symbol.asyncDispose]:o})}function uTo(e,i){let o=c().lockSync(e,i);return Object.assign(o,{[Symbol.dispose]:o})}function uRl(e,i){return c().check(e,i)}async function og(e,i){if(!e)return;try{await e()}catch(o){let n;try{let r=w(o);n=r==="ERELEASED"||r==="ENOTACQUIRED"?`lock was no longer held at release (${r}); the locked section may have run without exclusivity`:`lock directory could not be removed and is left to go stale: ${d(o)}`}catch{n="lock release rejected with a value that cannot be described"}t(`${i}: ${n}`,{level:"warn"})}}
export{Fd,uTo,uRl,og};
