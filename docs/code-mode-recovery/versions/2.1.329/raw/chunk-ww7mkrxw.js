// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{Os}from"/$bunfs/root/chunk-cqahc80t.js";import{t,_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{mr}from"/$bunfs/root/chunk-dnaxttmk.js";import{nge}from"/$bunfs/root/chunk-6qgv5nhe.js";import{kfl}from"/$bunfs/root/chunk-1a6tt983.js";import{unlinkSync as s}from"fs";import{mkdir as c}from"fs/promises";import{join as i}from"path";function vJs(){return i(kfl(),"claude","locks")}function Cpt(){return!Os(void 0)}async function Jqr(){let r=nge(process.execPath);if(r===void 0||!Cpt())return;try{let o=vJs(),e=i(o,`${r}@${process.pid}.lock`),n={pid:process.pid,version:r,execPath:process.execPath,acquiredAt:Date.now()};await c(o,{recursive:!0}),await mr(e,_(n,null,2)),process.on("exit",()=>{try{s(e)}catch{}})}catch(o){t(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${d(o)}`,{level:"warn"})}}
export{vJs,Cpt,Jqr};
