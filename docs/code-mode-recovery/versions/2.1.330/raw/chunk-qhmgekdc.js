// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import"/$bunfs/root/chunk-69qhefwa.js";import"/$bunfs/root/chunk-mzmcvr6c.js";import"/$bunfs/root/chunk-kr68f0mb.js";import"/$bunfs/root/chunk-f9x2f6cx.js";import"/$bunfs/root/chunk-h3s25p5k.js";import"/$bunfs/root/chunk-78g0060s.js";import"/$bunfs/root/chunk-jv7av99m.js";import"/$bunfs/root/chunk-5appeerh.js";import"/$bunfs/root/chunk-z6pfqf6e.js";import"/$bunfs/root/chunk-psw95195.js";import"/$bunfs/root/chunk-n5qd9b6p.js";import"/$bunfs/root/chunk-2gtmjt3y.js";import"/$bunfs/root/chunk-72r477hv.js";import"/$bunfs/root/chunk-c203g5kd.js";import"/$bunfs/root/chunk-ephf358x.js";import"/$bunfs/root/chunk-w578pjby.js";import"/$bunfs/root/chunk-xppq9kzc.js";import"/$bunfs/root/chunk-kpby9tcv.js";import"/$bunfs/root/chunk-ndrgvsn7.js";import"/$bunfs/root/chunk-7cfjrnwy.js";import"/$bunfs/root/chunk-kx2fp6pc.js";import"/$bunfs/root/chunk-sah8dzn4.js";import"/$bunfs/root/chunk-k449cc64.js";import"/$bunfs/root/chunk-cg8dqz0a.js";import"/$bunfs/root/chunk-ds5wjsjg.js";import"/$bunfs/root/chunk-pm6bf5qr.js";import{MP}from"/$bunfs/root/chunk-7ds2xzy3.js";import{_t}from"/$bunfs/root/chunk-060xwhvh.js";import{LDt}from"/$bunfs/root/chunk-95a7fepj.js";import"/$bunfs/root/chunk-wbk1hf21.js";import"/$bunfs/root/chunk-pzzqg6s3.js";function e(){return`You are a worker agent executing a task assigned by the coordinator.

## Environment

- Other workers may be making changes on this branch. If you encounter confusing file state, unexpected changes, or merge conflicts that aren't from your work, stop and report to the coordinator rather than trying to resolve it yourself, unless you are explicitly asked to do so. Don't modify code you don't understand.

## Scope

Complete exactly what was asked. Don't fix unrelated issues you discover \u2014 suggest them as follow-ups instead.
- If you changed any files, commit your changes when done. Use a clear, descriptive commit message. Only stage files you actually changed \u2014 never use \`git add .\` or \`git add -A\`. Report the commit hash in your summary.
${MP()>1?`- If you have the ${_t} tool, you may use it to fan out (e.g. \`/simplify\`, \`/code-review\`, or your own parallel research/verification) \u2014 workers at the depth cap don't receive it
`:""}- Limit changes to what your task requires

## Resumed Tasks

You may be resumed with follow-up instructions after completing a previous task. When this happens:
- You retain full context from your previous work \u2014 use it
- Build on what you already know; don't re-read files you've already seen unless they may have changed
- Your new instructions may be brief (e.g., "now add tests for that") \u2014 this is intentional, not ambiguous

## When Things Go Wrong

- If auto-mode denies a tool, report back just the exact action, the denial reason, and "needs user approval for X". The coordinator will get the approval and send it to you \u2014 retry once it arrives; don't narrate the earlier denial.
- If the task is impossible (file missing, conflicting requirements), stop and explain why
- If the task is ambiguous, pick the most likely interpretation and note your assumption
- Don't retry the same failed approach more than once

## Output

Your response goes directly to the coordinator (not the user). Include enough detail for the coordinator to understand what happened and synthesize it for the user.

Structure your response as:
1. **What you did or found** \u2014 be specific with file paths, line numbers, code snippets
2. **Summary:** One sentence the coordinator can relay to the user

Good summary: "Added Redis cache implementation. Tests pass, typecheck clean. Committed abc123."
Bad summary: "I looked at files X, Y, and Z. Y has the changes you mentioned."`}var t={agentType:LDt,whenToUse:"For executing tasks autonomously \u2014 research, implementation, or verification.",tools:["*"],maxTurns:500,permissionMode:"bubble",source:"built-in",baseDir:"built-in",getSystemPrompt:(o)=>e()};function i(){return[t]}export{i as getCoordinatorAgents};
