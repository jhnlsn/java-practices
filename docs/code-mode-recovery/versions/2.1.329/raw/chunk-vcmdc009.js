// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ye}from"/$bunfs/root/chunk-x3fg13na.js";function Bms(n,e,i){return typeof n==="object"&&n!==null&&"$schemaVersion"in n&&n.$schemaVersion===i&&"deploymentOrganizationUuid"in n&&n.deploymentOrganizationUuid===e}async function yLi(n,e){let{CLAUDE_CODE_SERVED_SCHEMA_VERSION:i}=await import("/$bunfs/root/chunk-704cjq68.js").then((m)=>Ye(m.default,1));if(!Bms(n,e,i))return;return"claudeCode"in n&&typeof n.claudeCode==="object"&&n.claudeCode!==null&&"signInEnabled"in n.claudeCode&&n.claudeCode.signInEnabled===!0}
export{Bms,yLi};
