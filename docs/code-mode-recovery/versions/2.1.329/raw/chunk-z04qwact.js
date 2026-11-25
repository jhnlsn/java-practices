// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{bP}from"/$bunfs/root/chunk-0v6g5ynk.js";import{Uxr}from"/$bunfs/root/chunk-cd3hqxcc.js";import{cTt}from"/$bunfs/root/chunk-phb99ctz.js";import{Brt}from"/$bunfs/root/chunk-h2m5hsce.js";import{_tn}from"/$bunfs/root/chunk-c76p2516.js";import{ZZi}from"/$bunfs/root/chunk-7g60jkbz.js";function knt(e){let n={CLAUDECODE:"1",CLAUDE_CODE_SESSION_ID:e.sessionId,CLAUDE_CODE_CHILD_SESSION:"1",CLAUDE_CODE_SESSION_ATTENDED:bP()?"1":"0",CLAUDE_PID:String(process.pid),...!e.isDisplayOnly&&Brt(e.sessionId)};if(e.source==="agent")n.AI_AGENT=ZZi("agent");if(e.effortLevel!==void 0)n.CLAUDE_EFFORT=e.effortLevel;if(Uxr()){let o=_tn();if(o!==void 0)n.TRACEPARENT=o}return n}function U_e(e){return{sessionId:e.session_id,effortLevel:e.effort?.level,source:"harness"}}function bK(){return Boolean(s.CLAUDE_CODE_CHILD_SESSION||s.CLAUDECODE)}function t(e){return e&&e.length?cTt(e):[]}var cue=t;
export{knt,U_e,bK,cue};
