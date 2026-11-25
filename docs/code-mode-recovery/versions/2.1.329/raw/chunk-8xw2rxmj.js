// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{a$}from"/$bunfs/root/chunk-agyyqm1q.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";var rEi="no_reply_needed",PMn=`__${rEi}`,l=`mcp__${a$}${PMn}`,oEi=["__message_coordinator","__message_thread"];function sEi(e){return!oEi.some((r)=>e.endsWith(r))}function G$e(){return new Set((s.CLAUDE_CODE_TERMINAL_MCP_TOOLS||"").split(",").map((e)=>e.trim()).filter(Boolean))}function OMn(){return G$e().values().some((e)=>e.endsWith(PMn)&&e!==l)}function utn(e){let r=G$e();if(r.size===0)return!1;let _=new Set;for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.type==="user"){if(o.isMeta)continue;let t=o.message.content;if(!Array.isArray(t))return!1;let a=!1;for(let i of t)if(i.type==="tool_result"){if(a=!0,!i.is_error)_.add(i.tool_use_id)}if(!a)return!1}else if(o.type==="assistant"){for(let t of o.message.content)if(t.type==="tool_use"&&_.has(t.id)&&r.has(t.name))return!0}}return!1}
export{rEi,PMn,oEi,sEi,G$e,OMn,utn};
