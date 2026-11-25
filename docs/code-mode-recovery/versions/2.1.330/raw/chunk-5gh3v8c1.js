// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{jst}from"/$bunfs/root/chunk-w1zyy3zs.js";var s=import.meta.require("/$bunfs/root/chunk-gjd6m6ps.js"),tRi="FILE REFERENCES:";function nRi(){return s?.getTeleportCacheState().status==="active"}function a(n,t){return t.some((e)=>{if(e.type!=="attachment"||e.attachment.type!=="mcp_instructions_delta")return!1;let{addedNames:o,addedBlocks:i}=e.attachment,r=o?.indexOf(n)??-1;return r>=0&&i?.[r]?.includes(jst)===!0})}function Esl(n,t){try{let e=n.mcpInfo?.serverName;if(e!==void 0&&a(e,t.messages))return"in_note";if(nRi())return"relay_text_unread";if(t.sentToolDescription===void 0)return"unknown";let o=t.sentToolDescription(n.name);return o===void 0?"no_tool_text":o.includes(tRi)?"in_tool_text":"tool_text_without_hint"}catch{return"unknown"}}
export{tRi,nRi,Esl};
