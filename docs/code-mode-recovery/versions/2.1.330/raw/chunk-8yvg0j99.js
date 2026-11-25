// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{eye}from"/$bunfs/root/chunk-1jfwdjvf.js";import{t5}from"/$bunfs/root/chunk-8v27xkv5.js";import{$ue}from"/$bunfs/root/chunk-924etrq7.js";function fq(o,e){let t={name:e.client.name,config:o};return{...e,client:t5(e.client,o),...e.tools!==void 0&&{tools:eye(t,e.tools)},...e.commands!==void 0&&{commands:$ue(t,e.commands)}}}
export{fq};
