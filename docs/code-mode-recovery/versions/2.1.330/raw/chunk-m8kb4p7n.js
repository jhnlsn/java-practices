// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{qrl,Zrl}from"/$bunfs/root/chunk-r9ecxfn9.js";import{_Ie}from"/$bunfs/root/chunk-ckgkcep6.js";function MSn({sessionId:s,getAccessToken:i,fetchSession:n,initial:e,createOrigin:a}){if(!_Ie())return;let o=!1,r=(t)=>{if(!Array.isArray(t.tags))throw Error("the session came without a readable tag list");return qrl(t,o)};return Zrl({...e&&{initial:e.then(r)},read:()=>n(s,{accessToken:i()}).then(r)})}
export{MSn};
