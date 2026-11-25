// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{z9a,X9a}from"/$bunfs/root/chunk-xhbt85pw.js";import{oPe}from"/$bunfs/root/chunk-x31fa00x.js";function qpn({sessionId:s,getAccessToken:i,fetchSession:n,initial:e,createOrigin:a}){if(!oPe())return;let o=!1,r=(t)=>{if(!Array.isArray(t.tags))throw Error("the session came without a readable tag list");return z9a(t,o)};return X9a({...e&&{initial:e.then(r)},read:()=>n(s,{accessToken:i()}).then(r)})}
export{qpn};
