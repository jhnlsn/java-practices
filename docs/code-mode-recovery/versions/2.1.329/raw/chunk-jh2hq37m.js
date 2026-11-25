// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{st}from"/$bunfs/root/chunk-4gsb5pr1.js";import{HS}from"/$bunfs/root/chunk-v1ke29af.js";import{x8a}from"/$bunfs/root/chunk-zzhs43py.js";import{rIi}from"/$bunfs/root/chunk-7nd44nkp.js";function JYn(a,t){return x8a(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=st.sidecar(e.projectKey,e.sessionId,n);return n.length<=rIi&&HS(r)===void 0?r:void 0})}
export{JYn};
