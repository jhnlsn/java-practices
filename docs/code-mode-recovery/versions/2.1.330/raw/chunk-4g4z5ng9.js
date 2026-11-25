// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{hye,QJ,Kyt}from"/$bunfs/root/chunk-bzyb60p0.js";import{Of}from"/$bunfs/root/chunk-sjqze7qg.js";function g(n){return n.recurring===!0&&n.finalRunNotice===void 0}function s(n,d,r){let{plugin:o}=n,e=o!==void 0&&hye();if(e)Of(()=>Kyt(o));if(e&&!g(n))QJ(d,void 0,n.agentId?"stays":r);return e}var y1o=(n)=>(d,r)=>{let o=()=>{if(r!==void 0)Of(r)},e=()=>{if(s(d,e,o))return;n(d,o)},i=s(d,e,o);if(!i)n(d,()=>{});return i&&!g(d)},S1o=(n)=>(d,r)=>{let o=new Map;return d.forEach((e)=>{o.set(e.plugin,[...o.get(e.plugin)??[],e])}),[...o].flatMap(([e,i])=>{let u=e===void 0?{}:{plugin:e},t=()=>Of(()=>r(i)),l=()=>{if(s(u,l,t))return;n(i,e,t)},f=s(u,l,t),a=!1,c=!1;if(!f)n(i,e,()=>{if(a=!0,c)t()});return c=!0,f||!a?i.map((p)=>p.id):[]})};export{y1o,S1o};
