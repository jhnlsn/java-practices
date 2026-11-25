// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Cs}from"/$bunfs/root/chunk-t39fw2cy.js";import{dBt,lO,cBt}from"/$bunfs/root/chunk-43hq1cm6.js";import{Qo}from"/$bunfs/root/chunk-yewef5qt.js";var c6e="cc-plugin-you-should-know";var QUo={id:"you-should-know-plugin",providerAgnostic:!0,advertisedCommand:"plugin",cooldownSessions:10,maxLifetimeShows:3,content:async(o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Qo("suggestion",o.theme)(`/plugin enable ${c6e}@${Cs}`)}`,isRelevant:async()=>dBt(c6e)&&lO(c6e)?.defaultEnabled===!1&&cBt(`${c6e}@${Cs}`)===void 0};export{c6e,QUo};
