// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ht}from"/$bunfs/root/chunk-mzmcvr6c.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{v_,Dc}from"/$bunfs/root/chunk-865at33z.js";function uii({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function fii(t){let e=ht(s.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await v_(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Y2(t){let e;try{e=Dc()?.accountUuid}catch{e=void 0}return uii({storedAccountUuid:e,hostAccountUuid:await fii(t)})}
export{uii,fii,Y2};
