// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{V,Pb}from"/$bunfs/root/chunk-kgzzwvwc.js";import{S,u}from"/$bunfs/root/chunk-y98mhv74.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{l}from"/$bunfs/root/chunk-3mgc6ahd.js";import{i_r,ACe,lMi,a_r}from"/$bunfs/root/chunk-xhbck72j.js";function _Bs(d,s,m,i){let e=i_r(d),r=e!==null?a_r():null,n=r?.code==="hooks_held"?null:r;if(n!==null)l("goal_set",n.code,{origin:u("restored")});let t;if(e===null||n!==null){if(s((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)ACe(t,"resume_swap");return}if(m.add(V(),"Stop","",lMi(e)),s((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:i?.iterations??0,setAt:i?.setAt??Date.now(),...i?.lastReason!==void 0&&{lastReason:i.lastReason},origin:"restored",tokensAtStart:Pb()}})),t!==void 0)ACe(t,"resume_swap");a("tengu_goal_restored_on_resume",{promptLength:e.length}),a("tengu_stop_hook_added",{promptLength:e.length,via:S("goal"),origin:u("restored")})}
export{_Bs};
