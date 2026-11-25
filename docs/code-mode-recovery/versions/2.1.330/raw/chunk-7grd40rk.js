// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{xc}from"/$bunfs/root/chunk-jar84hn9.js";import{t_}from"/$bunfs/root/chunk-qrpds8jv.js";import{I9s}from"/$bunfs/root/chunk-z2gzpw6w.js";import{dc}from"/$bunfs/root/chunk-qvjn7dva.js";import{mV}from"/$bunfs/root/chunk-nwk8fexj.js";function V6o(){return[{type:"text",text:I9s()}]}function qYl(){dc({name:mV,description:`Reference for writing a ${xc} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>t_(),async getPromptForCommand(){return V6o()}})}
export{V6o,qYl};
