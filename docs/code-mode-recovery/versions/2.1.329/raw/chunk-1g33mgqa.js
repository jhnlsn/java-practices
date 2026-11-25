// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ls}from"/$bunfs/root/chunk-vp9cgba2.js";import{U,rm,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var w4=ls({kind:"mcp_elicitation",payload:p(()=>rm((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>rm((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Wde=ls({kind:"mcp_elicitation_waiting",payload:p(()=>rm((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>U(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function J8s(t){return t===w4.kind||t===Wde.kind}
export{w4,Wde,J8s};
