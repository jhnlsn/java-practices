// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ew}from"/$bunfs/root/chunk-8tg38aha.js";import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{ds}from"/$bunfs/root/chunk-h485hv2e.js";var t="Claude wants to send this session\u2019s work to a Claude Project",r=ds({kind:"permission_continue_in_projects",payload:p(()=>Ew((e)=>typeof e==="object"&&e!==null&&("requestId"in e)&&("toolName"in e)&&("permissionResult"in e))),result:p(()=>Ew((e)=>typeof e==="object"&&e!==null&&("behavior"in e))),default:{behavior:"cancelled"}});export{t as CONTINUE_NOTIFICATION,r as projectContinuePermissionDialog};
