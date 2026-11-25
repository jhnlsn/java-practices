// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{at}from"/$bunfs/root/chunk-hkvzj051.js";import{db}from"/$bunfs/root/chunk-fp3vnecp.js";import{yol}from"/$bunfs/root/chunk-0dht3xy7.js";import{DUi}from"/$bunfs/root/chunk-a8ey418s.js";function Rtr(a,t){return yol(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=at.sidecar(e.projectKey,e.sessionId,n);return n.length<=DUi&&db(r)===void 0?r:void 0})}
export{Rtr};
