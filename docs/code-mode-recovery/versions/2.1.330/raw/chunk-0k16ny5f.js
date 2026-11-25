// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{J}from"/$bunfs/root/chunk-jv7av99m.js";import{ra}from"/$bunfs/root/chunk-q7qjcthc.js";import{link as s,lstat as o}from"fs/promises";async function jDt(r,e,i=!1){let n;try{return await s(r,e),!0}catch(t){n=t}let a=await o(e).catch((t)=>{if(J(t))return;throw t});if(a?.isFile()||i&&a!==void 0)return!1;if(i)throw n;return await ra(r,e),!0}
export{jDt};
