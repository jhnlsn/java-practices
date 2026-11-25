// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{ds}from"/$bunfs/root/chunk-h485hv2e.js";import{F,oc,B}from"/$bunfs/root/chunk-adx6804h.js";B();var e5=ds({kind:"mcp_elicitation",payload:p(()=>oc((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>oc((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Due=ds({kind:"mcp_elicitation_waiting",payload:p(()=>oc((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>F(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function ooi(t){return t===e5.kind||t===Due.kind}
export{e5,Due,ooi};
