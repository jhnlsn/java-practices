// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{wA,bst}from"/$bunfs/root/chunk-q2404y26.js";import{Mie,$F,Il,eG,Nye,sts}from"/$bunfs/root/chunk-bzyb60p0.js";async function qZn({toolUseContext:e,forkContextMessages:o,mainThreadAgentDefinition:t}){await bst(e);let{systemPrompt:s,userContext:m,systemContext:r}=sts()??await a(e,t);return{systemPrompt:s,userContext:m,systemContext:r,toolUseContext:e.modelFacts.model===e.loopModel?e:{...e,modelFacts:Il(e.loopModel)},forkContextMessages:o,advisorModel:e.getAdvisorSetting()}}async function a(e,o){let[t,s,m]=await Promise.all([e.renderedSystemPrompt??i(e,o),$F(e.session,e.storageV5,e.credentials),Mie(e.session,e.options.cacheBreakerPhrase)]);return{systemPrompt:t,userContext:s,systemContext:m}}async function i(e,o){let t=await eG(wA(e),e.modelFacts.model);return Nye({mainThreadAgentDefinition:o,toolUseContext:e,customSystemPrompt:e.options.customSystemPrompt,defaultSystemPrompt:t,appendSystemPrompt:e.options.appendSystemPrompt,model:e.modelFacts.model})}
export{qZn};
