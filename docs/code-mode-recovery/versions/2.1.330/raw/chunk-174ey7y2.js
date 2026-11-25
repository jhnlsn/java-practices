// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{FOn,gen,_en,$On}from"/$bunfs/root/chunk-bzyb60p0.js";function h(e,o){let p=_en(e),s=Math.min(p.length,FOn());return 2+$On(e,o).length+2+s+1}function Twn(e,o,p){let s=new Map;for(let n of e){if(n.type!=="prompt"||n.disableModelInvocation)continue;let t=n.pluginInfo?.pluginManifest.name;if(!t)continue;let a=h(n,e),r=s.get(t)??[];r.push({name:n.name,chars:a,approxTokens:Math.round(a/o)}),s.set(t,r)}let u=[...s.entries()].map(([n,t])=>{t.sort((r,i)=>i.chars-r.chars);let a=t.reduce((r,i)=>r+i.chars,0);return{pluginName:n,skillCount:t.length,chars:a,approxTokens:Math.round(a/o),skills:t}}).sort((n,t)=>t.chars-n.chars),m=u.reduce((n,t)=>n+t.chars,0),c=gen(p,o),l=m>c,g=l?c:m;return{byPlugin:u,totalChars:g,totalTokens:Math.round(g/o),overBudget:l}}
export{Twn};
