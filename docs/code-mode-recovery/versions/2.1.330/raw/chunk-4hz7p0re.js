// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{Hf,Is,Wd,rv}from"/$bunfs/root/chunk-9e5mdyfk.js";import{oV}from"/$bunfs/root/chunk-q4y63y6c.js";async function aer(r,o){if(!oV())return;try{let e=await Is(r,o);if(!e||!Wd(e)||e.state==="stopped"||rv(e))return;await Hf(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{aer};
