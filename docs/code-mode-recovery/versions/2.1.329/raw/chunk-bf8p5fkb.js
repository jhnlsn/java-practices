// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{YTn,m7t,h7t,XTn}from"/$bunfs/root/chunk-hg1yqkjk.js";function h(e,o){let p=h7t(e),s=Math.min(p.length,YTn());return 2+XTn(e,o).length+2+s+1}function Fhn(e,o,p){let s=new Map;for(let n of e){if(n.type!=="prompt"||n.disableModelInvocation)continue;let t=n.pluginInfo?.pluginManifest.name;if(!t)continue;let a=h(n,e),r=s.get(t)??[];r.push({name:n.name,chars:a,approxTokens:Math.round(a/o)}),s.set(t,r)}let u=[...s.entries()].map(([n,t])=>{t.sort((r,i)=>i.chars-r.chars);let a=t.reduce((r,i)=>r+i.chars,0);return{pluginName:n,skillCount:t.length,chars:a,approxTokens:Math.round(a/o),skills:t}}).sort((n,t)=>t.chars-n.chars),m=u.reduce((n,t)=>n+t.chars,0),c=m7t(p,o),l=m>c,g=l?c:m;return{byPlugin:u,totalChars:g,totalTokens:Math.round(g/o),overBudget:l}}
export{Fhn};
