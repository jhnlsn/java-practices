// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{mc}from"/$bunfs/root/chunk-v4hzksrd.js";import{Mg}from"/$bunfs/root/chunk-b3bkn4gj.js";import{EGs}from"/$bunfs/root/chunk-sm35x1rt.js";import{gc}from"/$bunfs/root/chunk-bn4xmax8.js";import{Bz}from"/$bunfs/root/chunk-dyvy28wy.js";function RUo(){return[{type:"text",text:EGs()}]}function w2l(){gc({name:Bz,description:`Reference for writing a ${mc} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Mg(),async getPromptForCommand(){return RUo()}})}
export{RUo,w2l};
