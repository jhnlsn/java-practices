// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{st}from"/$bunfs/root/chunk-4gsb5pr1.js";import{Ko,cs}from"/$bunfs/root/chunk-kgzzwvwc.js";import{w,fn}from"/$bunfs/root/chunk-avbzeyf3.js";import{$ve}from"/$bunfs/root/chunk-tkph4ha6.js";import{ct,_t,b}from"/$bunfs/root/chunk-aq3ms068.js";import{Ze}from"/$bunfs/root/chunk-8wtweva8.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{le}from"/$bunfs/root/chunk-c2c9kwmh.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{Oit,OWi,Cd,tjt,Lit,_wo}from"/$bunfs/root/chunk-w03c3634.js";import{lf}from"/$bunfs/root/chunk-106tq5ez.js";import{NF}from"/$bunfs/root/chunk-mzf9aybx.js";import{ont}from"/$bunfs/root/chunk-apt8rb8k.js";import{nU}from"/$bunfs/root/chunk-7w878m1r.js";import{u5t}from"/$bunfs/root/chunk-6fv52eka.js";import{ov}from"/$bunfs/root/chunk-der687bt.js";import{xa}from"/$bunfs/root/chunk-d5s04szg.js";import{os}from"/$bunfs/root/chunk-z3bt43w4.js";import{EY}from"/$bunfs/root/chunk-kfygb8jn.js";import{lt}from"/$bunfs/root/chunk-x3fg13na.js";import{join as L}from"path";var y=lt("/$bunfs/root/loopAutonomousPreamble-07qcyhv4.md");var k=lt("/$bunfs/root/loopAutonomousPreamblePersistent-3zqtkrvg.md");function c(){if(s.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return b("tengu_kairos_loop_persistent",!1)}function ECa(){let e=c()?k:y,t=u5t({forCloudSession:Boolean(s.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function vCa(){a("tengu_kairos_loop_persistent_activated",{variant:c()})}function l(e=!1){if(!ont())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${NF} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Cd} from this tick.${l()}`}function d(){let e=ct(),t=EY(_t(e),e),o=nU(),n=o?`send a brief status update for this tick via ${lf}`:"write a brief status update for this tick",i=t?`Immediately before re-arming, ${n}.`:`After re-arming, ${n}.`;return`

If a ${os} is armed (check ${ov}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${os} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${i} ${_wo({preArmStatus:t,briefMode:o})} To stop the loop, call ${Cd} with \`stop: true\` and ${xa} the monitor (use ${ov} to find its task ID if no longer in context).`}function R(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Cd} tool (not a recurring cron). To keep the loop alive, call ${Cd} again this turn with \`prompt\` set to the literal sentinel \`${Lit}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l()}`}function g(e){return e===tjt||e===Lit}function _(e,t){if(!g(t))return null;vCa();let o=t===Lit?R():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${ECa()}

---

${o}`}var v="__autonomous_preamble__",GHl="<<loop.md>>",l2o="<<loop.md-dynamic>>";function C(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Cd} from this tick.${l(!0)}`}function x(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Cd} tool (not a recurring cron). To keep the loop alive, call ${Cd} again this turn with \`prompt\` set to the literal sentinel \`${l2o}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l(!0)}`}function M(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Cd} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Cd} again this turn with \`prompt\` set to the literal sentinel \`${l2o}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l()}`}var r=25000,m=(r+1)*3;function N(e,t){if(e.length<=r&&!t)return e;let o=e.lastIndexOf(`
`,r);return`${e.slice(0,o>0?o:r)}

> WARNING: loop.md was truncated to ${r} bytes. Keep the task list concise.`}function D(){return I(S())??I(T())}function S(){return L(cs()??Ko(),".claude","loop.md")}function T(){return L(Ze(),"loop.md")}function I(e){let t;try{let o=le();t=OWi(o,e,Number.POSITIVE_INFINITY).verdict==="read"?o.readSync(e,{length:m}).buffer.toString("utf8"):null}catch(o){return A(o)}return t===null?null:f(e,t)}async function u(e){let t;try{let o=le(),{verdict:n}=await Oit(o,e,Number.POSITIVE_INFINITY);t=n==="read"?(await o.readFileBytes(e,m)).toString("utf8"):null}catch(o){return A(o)}return t===null?null:f(e,t)}function A(e){if(fn(e)||w(e)==="EISDIR")return null;throw e}function f(e,t){let o=t.trim();if(o.length===0)return null;let n=Buffer.byteLength(t)>=m;return{path:e,content:N(o,n)}}async function zHl(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let n=await e.read([st.state("loop-file")]);if(!n.ok)return u(o);let i=n.value.items[0];if(!i.found)return null;return f(o,Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8"))}function h(e){return e===GHl||e===l2o}function q(e,t){if(!h(t))return null;return O(e,t,D())}async function j(e,t,o){if(!h(t))return null;return O(e,t,await zHl(o))}function O(e,t,o){let n=t===l2o;if(o){let p=n?x():C();if(e.lastLoopFileDelivered===o.content)return p;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${p}`}vCa();let i=n?M():P();if(e.lastLoopFileDelivered===v||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=v,e.autonomousPreambleDelivered=!0,`${ECa()}

---

${i}`}function CGl(e){return g(e)||h(e)}function gzr(e){if(h(e))return"/loop (loop.md)";return g(e)?"/loop":$ve(e)}function AGl(e,t){return _(e,t)??q(e,t)??t}async function RGl(e,t,o){return _(e,t)??await j(e,t,o)??t}
export{ECa,vCa,GHl,l2o,zHl,CGl,gzr,AGl,RGl};
