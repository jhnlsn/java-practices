// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{at}from"/$bunfs/root/chunk-hkvzj051.js";import{Oo,us}from"/$bunfs/root/chunk-f9x2f6cx.js";import{w,fn}from"/$bunfs/root/chunk-jv7av99m.js";import{QCe}from"/$bunfs/root/chunk-z9f6hbhp.js";import{dt,St,b}from"/$bunfs/root/chunk-865at33z.js";import{Ze}from"/$bunfs/root/chunk-2gtmjt3y.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{le}from"/$bunfs/root/chunk-w578pjby.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{Ydt,e5i,bl,D6t,ect,Tmn}from"/$bunfs/root/chunk-xfj2cwfv.js";import{Ac}from"/$bunfs/root/chunk-4x1jja6d.js";import{qx}from"/$bunfs/root/chunk-cee6q0wn.js";import{EDe}from"/$bunfs/root/chunk-rnad4hj1.js";import{Ax}from"/$bunfs/root/chunk-1dkksxs0.js";import{hXt}from"/$bunfs/root/chunk-ckp7gqrb.js";import{Nk}from"/$bunfs/root/chunk-6qaevejb.js";import{Ra}from"/$bunfs/root/chunk-s1btam0h.js";import{Xo}from"/$bunfs/root/chunk-9xt9z453.js";import{CV}from"/$bunfs/root/chunk-0djtvg5h.js";import{ft}from"/$bunfs/root/chunk-w1d7ygsk.js";import{join as L}from"path";var y=ft("/$bunfs/root/loopAutonomousPreamble-07qcyhv4.md");var k=ft("/$bunfs/root/loopAutonomousPreamblePersistent-3zqtkrvg.md");function c(){if(s.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return b("tengu_kairos_loop_persistent",!1)}function LLa(){let e=c()?k:y,t=hXt({forCloudSession:Boolean(s.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function NLa(){a("tengu_kairos_loop_persistent_activated",{variant:c()})}function l(e=!1){if(!EDe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${qx} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${bl} from this tick.${l()}`}function d(){let e=dt(),t=CV(St(e),e),o=Ax(),n=o?`send a brief status update for this tick via ${Ac}`:"write a brief status update for this tick",i=t?`Immediately before re-arming, ${n}.`:`After re-arming, ${n}.`;return`

If a ${Xo} is armed (check ${Nk}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${Xo} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${i} ${Tmn({preArmStatus:t,briefMode:o})} To stop the loop, call ${bl} with \`stop: true\` and ${Ra} the monitor (use ${Nk} to find its task ID if no longer in context).`}function R(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${bl} tool (not a recurring cron). To keep the loop alive, call ${bl} again this turn with \`prompt\` set to the literal sentinel \`${ect}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l()}`}function g(e){return e===D6t||e===ect}function _(e,t){if(!g(t))return null;NLa();let o=t===ect?R():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${LLa()}

---

${o}`}var v="__autonomous_preamble__",tzl="<<loop.md>>",O3o="<<loop.md-dynamic>>";function C(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${bl} from this tick.${l(!0)}`}function x(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${bl} tool (not a recurring cron). To keep the loop alive, call ${bl} again this turn with \`prompt\` set to the literal sentinel \`${O3o}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l(!0)}`}function M(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${bl} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${bl} again this turn with \`prompt\` set to the literal sentinel \`${O3o}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l()}`}var r=25000,m=(r+1)*3;function N(e,t){if(e.length<=r&&!t)return e;let o=e.lastIndexOf(`
`,r);return`${e.slice(0,o>0?o:r)}

> WARNING: loop.md was truncated to ${r} bytes. Keep the task list concise.`}function D(){return I(S())??I(T())}function S(){return L(us()??Oo(),".claude","loop.md")}function T(){return L(Ze(),"loop.md")}function I(e){let t;try{let o=le();t=e5i(o,e,Number.POSITIVE_INFINITY).verdict==="read"?o.readSync(e,{length:m}).buffer.toString("utf8"):null}catch(o){return A(o)}return t===null?null:f(e,t)}async function u(e){let t;try{let o=le(),{verdict:n}=await Ydt(o,e,Number.POSITIVE_INFINITY);t=n==="read"?(await o.readFileBytes(e,m)).toString("utf8"):null}catch(o){return A(o)}return t===null?null:f(e,t)}function A(e){if(fn(e)||w(e)==="EISDIR")return null;throw e}function f(e,t){let o=t.trim();if(o.length===0)return null;let n=Buffer.byteLength(t)>=m;return{path:e,content:N(o,n)}}async function nzl(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let n=await e.read([at.state("loop-file")]);if(!n.ok)return u(o);let i=n.value.items[0];if(!i.found)return null;return f(o,Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8"))}function h(e){return e===tzl||e===O3o}function q(e,t){if(!h(t))return null;return O(e,t,D())}async function j(e,t,o){if(!h(t))return null;return O(e,t,await nzl(o))}function O(e,t,o){let n=t===O3o;if(o){let p=n?x():C();if(e.lastLoopFileDelivered===o.content)return p;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${p}`}NLa();let i=n?M():P();if(e.lastLoopFileDelivered===v||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=v,e.autonomousPreambleDelivered=!0,`${LLa()}

---

${i}`}function dXl(e){return g(e)||h(e)}function d9r(e){if(h(e))return"/loop (loop.md)";return g(e)?"/loop":QCe(e)}function cXl(e,t){return _(e,t)??q(e,t)??t}async function uXl(e,t,o){return _(e,t)??await j(e,t,o)??t}
export{LLa,NLa,tzl,O3o,nzl,dXl,d9r,cXl,uXl};
