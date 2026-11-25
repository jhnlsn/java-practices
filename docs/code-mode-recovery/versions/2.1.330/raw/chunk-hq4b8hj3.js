// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Vi}from"/$bunfs/root/chunk-cy0ck7w2.js";import{OT,tb}from"/$bunfs/root/chunk-ed372ykp.js";function fUe(e,r){return`${Vi(e)??""}/${Vi(r)??""}`}function zFa(e){return Vi(e)??""}function x8r({serverName:e,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:a,abortController:n,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}){let t=OT("mcp_task");return{...tb(t,"mcp_task",fUe(e,r),s),type:"mcp_task",status:"running",serverName:e,toolName:r,mcpTaskId:o??t,mcpStatus:"working",pollIntervalMs:a,abortController:n,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}}
export{fUe,zFa,x8r};
