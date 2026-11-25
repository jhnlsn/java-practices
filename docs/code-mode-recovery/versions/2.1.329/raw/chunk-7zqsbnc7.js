// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{pt}from"/$bunfs/root/chunk-5w3q3ks2.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{cy,au}from"/$bunfs/root/chunk-aq3ms068.js";function fXs({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function pXs(t){let e=pt(s.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await cy(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Fj(t){let e;try{e=au()?.accountUuid}catch{e=void 0}return fXs({storedAccountUuid:e,hostAccountUuid:await pXs(t)})}
export{fXs,pXs,Fj};
