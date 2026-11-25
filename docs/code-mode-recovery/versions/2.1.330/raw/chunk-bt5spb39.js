// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Y}from"/$bunfs/root/chunk-f9x2f6cx.js";import{pq,wUe}from"/$bunfs/root/chunk-gk0jv3qt.js";import{aO,ri}from"/$bunfs/root/chunk-qdcbcsg7.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";var Koi="anthropic/workingToken",Qtt=new ze(()=>({noLongerLive:new Set}));function sBa(i,s){if(s.name!==ri||!Y())return;let d=i.call;i.call=async(n,e,r,a,l,t)=>{let f=Qtt.peek(e.session),p=i.mcpInfo?.toolName??"";await f?.textTakenBack?.(p,n,e.toolUseId,e.agentId);let o=wUe(pq.peek(e.session)?.host,s)?.serverId===aO?await f?.savesSettled?.(p,n):void 0;if(o===void 0)return d(n,e,r,a,l,t);let{signal:m}=e.abortController,u=m.aborted,c=!1;try{let k=await d(n,e,r&&(async(...v)=>(await o.asking(),r(...v))),a,l,o.token===void 0?t:{...t,mcpCallMeta:{...t?.mcpCallMeta,[Koi]:o.token}});return c=!0,k}finally{o.release(c||m.aborted&&!u)}}}
export{Koi,Qtt,sBa};
