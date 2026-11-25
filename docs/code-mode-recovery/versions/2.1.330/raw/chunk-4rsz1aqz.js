// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{W,rw}from"/$bunfs/root/chunk-f9x2f6cx.js";import{S,f}from"/$bunfs/root/chunk-78g0060s.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{l}from"/$bunfs/root/chunk-cqa9hrgx.js";import{yvr,$Re,ABi,Svr}from"/$bunfs/root/chunk-ch6321bk.js";function Eqs(d,s,m,i){let e=yvr(d),r=e!==null?Svr():null,n=r?.code==="hooks_held"?null:r;if(n!==null)l("goal_set",n.code,{origin:f("restored")});let t;if(e===null||n!==null){if(s((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)$Re(t,"resume_swap");return}if(m.add(W(),"Stop","",ABi(e)),s((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:i?.iterations??0,setAt:i?.setAt??Date.now(),...i?.lastReason!==void 0&&{lastReason:i.lastReason},origin:"restored",tokensAtStart:rw()}})),t!==void 0)$Re(t,"resume_swap");a("tengu_goal_restored_on_resume",{promptLength:e.length}),a("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:f("restored")})}
export{Eqs};
