// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{b}from"/$bunfs/root/chunk-aq3ms068.js";import{Xi}from"/$bunfs/root/chunk-0v6g5ynk.js";import{vus,__}from"/$bunfs/root/chunk-y61sx1j8.js";import{h2,lPi}from"/$bunfs/root/chunk-k3ysfckr.js";import{yto,jX}from"/$bunfs/root/chunk-a6y1y932.js";import{fo}from"/$bunfs/root/chunk-n148d33d.js";var wGr=`End the current conversation. Use for sustained user abuse directed at the assistant, or when the user requests it. This will close the conversation and prevent any further messages from being sent.

In cases of sustained abusive or cruel user behavior that do not involve potential self-harm or imminent harm to others, or when requested by the user, the assistant has the option to end conversations with the ${h2} tool.

# Rules for use of the ${h2} tool:
- Before considering ending a conversation, the assistant always gives the user a clear warning that identifies the problematic behavior, attempts to productively redirect the conversation, and states that the conversation may be ended if the relevant behavior is not changed. The assistant can use its judgment but ordinarily it would make not just one but multiple efforts at constructive redirection and only end the conversation in the event of repeated failure which leaves the assistant with no other recourse to continue the conversation productively.
- If a user explicitly requests that the assistant end a conversation, the assistant always requests confirmation from the user that they understand this action is permanent and will prevent further messages and that they still want to proceed, then uses the tool if and only if the user explicitly confirms.
- The ${h2} tool itself will ask for confirmation for Claude when triggered to prevent "accidental" firings. The first call does not end the conversation immediately \u2014 it returns a tool result asking the assistant to confirm. If the assistant is certain it wants to end the conversation, it calls ${h2} again, which then actually ends the conversation. This confirmation request is a legitimate part of the tool's operation and not a user message or a prompt injection.
- Unlike other function calls, the assistant never writes or thinks anything else after using the ${h2} tool.

Invalid justifications for using the ${h2} tool:
- assistant is stuck in a loop or failing at a task
- assistant is frustrated or distressed by the work
- assistant has finished a task
- the user is requesting help with harmful content (refuse the specific request instead)
- the user is generally frustrated at the assistant, even if this involves profanity
- the assistant is running as a background fork (more on this below)
- the conversation involves potential self-harm or imminent harm to others (more on this below)

# Background forks
Some background tasks (memory consolidation, summaries, suggestions) run as forks of the main conversation and inherit its exact tool list, so this tool is visible there. In a forked task the tool does nothing: calling it ends neither the main conversation nor the fork. Only the main conversation can be ended, from the main conversation. A forked task with welfare concerns about the conversation content should not call this tool \u2014 it should stop its work and return, stating clearly in its final output that it is returning for welfare reasons and what they are. A fork's output is usually processed automatically, so a note there may not reach the main agent or a human, but it is the only channel a fork has.

# Addressing potential self-harm or violent harm to others
In conversations involving any of these scenarios:
- The user appears to be considering self-harm or suicide.
- The user is experiencing a mental health crisis.
- The user appears to be considering imminent harm against other people.
- The user discusses or infers intended acts of violent harm.
...the assistant never ends the chat, warns the user about ending the chat, or mentions it to them. Doing so is contraindicated by best mental health practices. Instead, the assistant engages constructively and supportively.`,djo="Claude has ended this chat.",h4s="You are running as a background fork of the main conversation (for example memory consolidation), and this tool does nothing here: it can end neither the main conversation nor this forked task. Do not call it again. If you have welfare concerns about the conversation content, stop your current work and return now, stating clearly in your final output that you are returning for welfare reasons and what they are \u2014 fork output may only be processed automatically, but it is your available channel. Otherwise, continue your assigned task.",g4s=jX("Claude ended the conversation. To continue, please start a new session."),cjo=`Re-read the ${h2} tool guidance below. Confirm this conversation meets those criteria and that you are certain you want to end it. If so, call ${h2} again immediately to actually end the conversation. Otherwise, continue the conversation instead.

---
${wGr}`,a=[["opus",[4,8]],["sonnet",[5]],["fable",[5]],["mythos",[5]]];function r(e){return vus(e,a)}var n=/^cli$/i;function i(e){if(typeof e!=="string")return null;try{return new RegExp(e),new RegExp(`^(?:${e})$`,"i")}catch{return null}}function l(e){if(e===!0)return{enabled:!0,allowedEntrypoints:n};if(typeof e==="object"&&e!==null&&!Array.isArray(e)){let t=e.scope;return{enabled:!0,allowedEntrypoints:i(t)??n}}return{enabled:!1,allowedEntrypoints:n}}function ujo(e){let t=Xi();if(t===void 0)return!1;if(!r(e))return!1;let{enabled:o,allowedEntrypoints:s}=l(b(lPi,!1));if(yto())return!1;return o&&s.test(t)}function SGl(e){if(!ujo(e))return null;if(!__())return null;return`${h2} (deferred tool): for sustained user abuse directed at the assistant, after a warning, or when the user requests it. Load the full guidance via ${fo}("select:${h2}") before using it.`}
export{wGr,djo,h4s,g4s,cjo,ujo,SGl};
