// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{Oi}from"/$bunfs/root/chunk-69qhefwa.js";import{t,_}from"/$bunfs/root/chunk-w578pjby.js";import{yr}from"/$bunfs/root/chunk-q7qjcthc.js";import{sye}from"/$bunfs/root/chunk-sgar51s8.js";import{fvl}from"/$bunfs/root/chunk-thchq5z2.js";import{unlinkSync as s}from"fs";import{mkdir as c}from"fs/promises";import{join as i}from"path";function gai(){return i(fvl(),"claude","locks")}function i_t(){return!Oi(void 0)}async function VXr(){let r=sye(process.execPath);if(r===void 0||!i_t())return;try{let o=gai(),e=i(o,`${r}@${process.pid}.lock`),n={pid:process.pid,version:r,execPath:process.execPath,acquiredAt:Date.now()};await c(o,{recursive:!0}),await yr(e,_(n,null,2)),process.on("exit",()=>{try{s(e)}catch{}})}catch(o){t(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${d(o)}`,{level:"warn"})}}
export{gai,i_t,VXr};
