// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Be}from"/$bunfs/root/chunk-69qhefwa.js";import{On}from"/$bunfs/root/chunk-865at33z.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";class s{current;turnEnded=Be()}var Nht=new ze(()=>new s);function F_e(e,n){let o=Nht.of(e);if(o.current?.sessionId!==e.id)o.current={sessionId:e.id,isNew:!n.some((t)=>t.type==="assistant"||On(t)),isSettled:!1,number:void 0,turnsStarted:0,hasSecondPrompt:!1,edited:!1,taskNote:void 0};return o.current}function HOa(e,n){return Nht.of(e).turnEnded.subscribe(n)}
export{Nht,F_e,HOa};
