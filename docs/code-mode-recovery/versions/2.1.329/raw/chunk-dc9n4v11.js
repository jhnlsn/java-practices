// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Oe}from"/$bunfs/root/chunk-cqahc80t.js";import{IA}from"/$bunfs/root/chunk-r6qcz1v1.js";import{Mr}from"/$bunfs/root/chunk-aq3ms068.js";import{qCr}from"/$bunfs/root/chunk-jngxzq9c.js";import{bbe}from"/$bunfs/root/chunk-w03c3634.js";import{ro,t7}from"/$bunfs/root/chunk-r3zpj4t6.js";import{kB,b8r}from"/$bunfs/root/chunk-hg1yqkjk.js";import{llr,bs}from"/$bunfs/root/chunk-2e9gfvd5.js";function kGr(t){let r=w(t);if(r===null)return null;let o=ro(t.totalTokens-t.rawMaxTokens),a=ro(t.rawMaxTokens);if(r==="hard_limit"){let c=Oe(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${a}-token limit by ${o} tokens \u2014 run ${c} to continue.`}let m=Oe(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${o} tokens past the ${a}-token compaction window \u2014 run ${m} to reduce usage.`}function w(t){if(t.totalTokens<=t.rawMaxTokens)return null;return t.autocompactSource==="auto"?"hard_limit":"compaction_window"}var h=10;function EGr(t,{isBounded:r=!1,isTotalEstimated:o=!1}={}){let{categories:a,totalTokens:m,rawMaxTokens:c,percentage:p,model:u,memoryFiles:k,mcpTools:f,agents:C,skills:g,messageBreakdown:x,systemTools:S,systemPromptSections:d}=t,e=`## Context Usage

`;if(e+=`**Model:** ${u}  
`,e+=`**Tokens:** ${ro(m)} / ${ro(c)} (${p}%)
`,t.loadRaise)e+=`
**Auto-compact window:** raised from ${ro(t.loadRaise.fromWindow)} to ${ro(t.loadRaise.toWindow)} tokens in this conversation, to fit what loads with every request
`;let T=kGr(t);if(T)e+=`${t.loadRaise?`
`:""}**Over limit:** ${T}
`;if(e+=`
`,o)e+=`This token count is an estimate.

`;let v=a.filter((s)=>s.tokens>0&&s.name!=="Free space"&&s.name!=="Autocompact buffer");if(v.length>0){e+=`### Estimated usage by category

`,e+=`| Category | Tokens | Percentage |
`,e+=`|----------|--------|------------|
`;for(let n of v){let i=(n.tokens/c*100).toFixed(1);e+=`| ${n.name} | ${ro(n.tokens)} | ${i}% |
`}let s=a.find((n)=>n.name==="Free space");if(s&&s.tokens>0){let n=(s.tokens/c*100).toFixed(1);e+=`| Free space | ${ro(s.tokens)} | ${n}% |
`}let l=a.find((n)=>n.name==="Autocompact buffer");if(l&&l.tokens>0){let n=(l.tokens/c*100).toFixed(1);e+=`| Autocompact buffer | ${ro(l.tokens)} | ${n}% |
`}e+=`
`}let M=r&&a.some((s)=>s.isDeferred&&s.name.includes("MCP")),P=M?f.filter((s)=>s.isLoaded!==!1):f;if(P.length>0){let{kept:s,moreRow:l}=y(P,r);e+=`### MCP Tools

`,e+=`| Tool | Server | Tokens |
`,e+=`|------|--------|--------|
`;for(let n of s)e+=`| ${n.name} | ${n.serverName} | ${ro(n.tokens)} |
`;e+=l,e+=`
`}if(M){let s=b(f);if(s.length>0){let{kept:l,moreRow:n}=y(s,r);e+=`### Other MCP tools, by server

`,e+=`| Server | Tools | Tokens if all were loaded |
`,e+=`|--------|-------|---------------------------|
`;for(let i of l)e+=`| ${i.serverName} | ${i.count} | ${ro(i.tokens)} |
`;e+=n,e+=`
`}}if(S&&S.length>0,d&&d.length>0,C.length>0){let{kept:s,moreRow:l}=y(C,r);e+=`### Custom Agents

`,e+=`| Agent Type | Source | Tokens |
`,e+=`|------------|--------|--------|
`;for(let n of s){let i;switch(n.source){case"projectSettings":i="Project";break;case"userSettings":i="User";break;case"localSettings":i="Local";break;case"flagSettings":i="Flag";break;case"policySettings":i="Policy";break;case"plugin":i="Plugin";break;case"built-in":i="Built-in";break;default:i=String(n.source)}e+=`| ${n.agentType} | ${i} | ${ro(n.tokens)} |
`}e+=l,e+=`
`}if(k.length>0){let{kept:s,moreRow:l}=y(k,r);e+=`### Memory Files

`,e+=`| Type | Path | Tokens |
`,e+=`|------|------|--------|
`;for(let n of s)e+=`| ${n.type} | ${n.path} | ${ro(n.tokens)} |
`;e+=l,e+=`
`}if(g&&g.tokens>0&&g.skillFrontmatter.length>0){let{kept:s,moreRow:l}=y(g.skillFrontmatter,r,t7);e+=`### Skills

`,e+=`| Skill | Source | Tokens |
`,e+=`|-------|--------|--------|
`;for(let n of s){let i=qCr(n.source)+(n.pluginName&&n.source!=="syncedSkills"?` (${n.pluginName})`:"");e+=`| ${n.name} | ${i} | ${t7(n.tokens)} |
`}e+=l,e+=`
`}return e}function y(t,r,o=ro){if(!r||t.length<=h)return{kept:t,moreRow:""};let a=t.toSorted((p,u)=>u.tokens-p.tokens),m=a.slice(h),c=m.reduce((p,u)=>p+u.tokens,0);return{kept:a.slice(0,h),moreRow:`| and ${m.length} more |  | ${o(c)} |
`}}function b(t){let r=new Map;for(let o of t)if(o.isLoaded===!1){let a=r.get(o.serverName);r.set(o.serverName,{count:(a?.count??0)+1,tokens:(a?.tokens??0)+o.tokens})}return Array.from(r,([o,a])=>({serverName:o,...a}))}async function xFe(t){let{session:r,messages:o,getAppState:a,options:{mainLoopModel:m,agentDefinitions:c,customSystemPrompt:p,appendSystemPrompt:u,systemPromptSnapshot:k,excludeDynamicSections:f,mcpClients:C},detail:g,terminalWidth:x,localPaths:S}=t,d=Mr(o),e=a(),T=await b8r(d,m,async()=>e.toolPermissionContext,IA(t),c,{session:r,toolUseContext:{options:{customSystemPrompt:p,appendSystemPrompt:u,systemPromptSnapshot:k,mcpClients:C},getMcp:t.getMcp,storageV5:t.storageV5,credentials:t.credentials},originalMessages:d,configuredWindow:e.autoCompactWindow,excludeDynamicSections:f,detail:g,terminalWidth:x,localPaths:S});return llr(r)?{...T,deferredBuiltinTools:void 0,systemTools:void 0,systemPromptSections:void 0}:T}async function bGl(t,r){let o=await xFe(r),m=bs(r.session)?{...o,memoryFiles:[]}:o,c=llr(r.session),p=kB(Mr(r.messages)),u=m.categories.filter((k)=>k.kind==="used"&&k.id!=="messages").reduce((k,f)=>k+f.tokens,0);return{type:"text",value:EGr(c?{...m,messageBreakdown:void 0}:m,{isTotalEstimated:c&&(m.apiUsage===null||p?.handedOff===!0||u>bbe(m.apiUsage))}),contextUsage:HHl(m)}}function HHl(t){let r=w(t);return{model:t.model,total_tokens:t.totalTokens,raw_max_tokens:t.rawMaxTokens,percentage:t.percentage,...r!==null&&{over_limit:{tokens_over:t.totalTokens-t.rawMaxTokens,kind:r}},categories:t.categories.map((o)=>({name:o.name,tokens:o.tokens,kind:o.kind})),mcp_tools:t.mcpTools.map((o)=>({name:o.name,server_name:o.serverName,tokens:o.tokens})),memory_files:t.memoryFiles.map((o)=>({path:o.path,type:o.type,tokens:o.tokens})),agents:t.agents.map((o)=>({agent_type:o.agentType,source:o.source,tokens:o.tokens})),...t.skills&&t.skills.skillFrontmatter.length>0&&{skills:t.skills.skillFrontmatter.map((o)=>({name:o.name,source:o.source,...o.pluginName!==void 0&&{plugin_name:o.pluginName},tokens:o.tokens}))}}}
export{kGr,EGr,xFe,bGl,HHl};
