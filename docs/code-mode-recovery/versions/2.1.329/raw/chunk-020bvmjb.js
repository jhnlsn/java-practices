// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{wf,Ms,Ed,gE}from"/$bunfs/root/chunk-yzxvzrvh.js";import{Dz}from"/$bunfs/root/chunk-tefhx4bd.js";async function O8n(r,o){if(!Dz())return;try{let e=await Ms(r,o);if(!e||!Ed(e)||e.state==="stopped"||gE(e))return;await wf(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{O8n};
