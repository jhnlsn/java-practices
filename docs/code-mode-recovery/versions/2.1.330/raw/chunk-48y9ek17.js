// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{rt}from"/$bunfs/root/chunk-w1d7ygsk.js";function IEs(n,e,i){return typeof n==="object"&&n!==null&&"$schemaVersion"in n&&n.$schemaVersion===i&&"deploymentOrganizationUuid"in n&&n.deploymentOrganizationUuid===e}async function GGi(n,e){let{CLAUDE_CODE_SERVED_SCHEMA_VERSION:i}=await import("/$bunfs/root/chunk-n94c768z.js").then((m)=>rt(m.default,1));if(!IEs(n,e,i))return;return"claudeCode"in n&&typeof n.claudeCode==="object"&&n.claudeCode!==null&&"signInEnabled"in n.claudeCode&&n.claudeCode.signInEnabled===!0}
export{IEs,GGi};
