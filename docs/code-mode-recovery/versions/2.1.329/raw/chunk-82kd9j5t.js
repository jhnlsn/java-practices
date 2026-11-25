// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Xb}from"/$bunfs/root/chunk-88hchn22.js";import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ls}from"/$bunfs/root/chunk-vp9cgba2.js";var t="Claude wants to send this session\u2019s work to a Claude Project",r=ls({kind:"permission_continue_in_projects",payload:p(()=>Xb((e)=>typeof e==="object"&&e!==null&&("requestId"in e)&&("toolName"in e)&&("permissionResult"in e))),result:p(()=>Xb((e)=>typeof e==="object"&&e!==null&&("behavior"in e))),default:{behavior:"cancelled"}});export{t as CONTINUE_NOTIFICATION,r as projectContinuePermissionDialog};
