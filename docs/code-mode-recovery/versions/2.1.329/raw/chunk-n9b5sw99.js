// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ra}from"/$bunfs/root/chunk-nchg3ttk.js";import{Jv,vS}from"/$bunfs/root/chunk-wrjcstwp.js";function YFe(e,r){return`${ra(e)??""}/${ra(r)??""}`}function DOa(e){return ra(e)??""}function wKr({serverName:e,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}){let t=Jv("mcp_task");return{...vS(t,"mcp_task",YFe(e,r),s),type:"mcp_task",status:"running",serverName:e,toolName:r,mcpTaskId:o??t,mcpStatus:"working",pollIntervalMs:n,abortController:a,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}}
export{YFe,DOa,wKr};
