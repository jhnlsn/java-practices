// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{X}from"/$bunfs/root/chunk-kgzzwvwc.js";import{FV,ZFe}from"/$bunfs/root/chunk-vs6wg4zt.js";import{aP,Ws}from"/$bunfs/root/chunk-agyyqm1q.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";var J7s="anthropic/workingToken",fZe=new qe(()=>({noLongerLive:new Set}));function dIa(i,s){if(s.name!==Ws||!X())return;let d=i.call;i.call=async(n,e,r,a,l,t)=>{let f=fZe.peek(e.session),p=i.mcpInfo?.toolName??"";await f?.textTakenBack?.(p,n,e.toolUseId,e.agentId);let o=ZFe(FV.peek(e.session)?.host,s)?.serverId===aP?await f?.savesSettled?.(p,n):void 0;if(o===void 0)return d(n,e,r,a,l,t);let{signal:m}=e.abortController,u=m.aborted,c=!1;try{let k=await d(n,e,r&&(async(...v)=>(await o.asking(),r(...v))),a,l,o.token===void 0?t:{...t,mcpCallMeta:{...t?.mcpCallMeta,[J7s]:o.token}});return c=!0,k}finally{o.release(c||m.aborted&&!u)}}}
export{J7s,fZe,dIa};
