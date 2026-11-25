// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Z}from"/$bunfs/root/chunk-bz1f2qnq.js";import{Efe,Kns,Bmi,ESt}from"/$bunfs/root/chunk-bzyb60p0.js";import{Xi,aJe}from"/$bunfs/root/chunk-prn6030k.js";function nMe(){return ESt()||Efe(Xi,aJe())}function S9s(){if(!nMe())return null;if(Bmi()&&!Efe(Xi,aJe()))return Kns;return"--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry)."}function AZn(r){let{mode:e,isBypassPermissionsModeAvailable:o}=Z(r);return e==="bypassPermissions"||e==="plan"&&o}
export{nMe,S9s,AZn};
