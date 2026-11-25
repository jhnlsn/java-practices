// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ds}from"/$bunfs/root/chunk-xcgcdx61.js";import{GGt,iI,zGt}from"/$bunfs/root/chunk-vfyns8ja.js";import{ls}from"/$bunfs/root/chunk-nn296t4g.js";var aqe="cc-plugin-you-should-know";var SVo={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${ls("suggestion",o.theme)(`/plugin enable ${aqe}@${Ds}`)}`,isRelevant:async()=>GGt(aqe)&&iI(aqe)?.defaultEnabled===!1&&zGt(`${aqe}@${Ds}`)===void 0};export{aqe,SVo};
