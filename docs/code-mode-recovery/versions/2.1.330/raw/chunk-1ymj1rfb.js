// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Y,pVe}from"/$bunfs/root/chunk-f9x2f6cx.js";import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{vn}from"/$bunfs/root/chunk-4vsz8a99.js";import{B9,Qr,Sr}from"/$bunfs/root/chunk-865at33z.js";import{Jh}from"/$bunfs/root/chunk-p1ewvgeh.js";import{dR}from"/$bunfs/root/chunk-bzyb60p0.js";import{so}from"/$bunfs/root/chunk-e5q83yb8.js";import{Unr,uXt}from"/$bunfs/root/chunk-awvk50qj.js";import{lie}from"/$bunfs/root/chunk-gc5a361p.js";import{Gd}from"/$bunfs/root/chunk-wwft95x8.js";import{OA}from"/$bunfs/root/chunk-kemkq7qp.js";import{iS}from"/$bunfs/root/chunk-bkfd2ttj.js";import{De}from"/$bunfs/root/chunk-k883m4fq.js";import{n,c,Ae,B}from"/$bunfs/root/chunk-adx6804h.js";B();function i(){return B9()==="default"?" (use the Agent tool instead)":""}function l(){return`## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${dR()&&Gd()?`\`find\`/${Qr}, \`grep\`/${Sr}, and ${De}`:`${Qr}, ${Sr}, and ${De}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${so} if you need to clarify approaches
6. Exit plan mode with ${iS} when ready to implement

`}function u(){let e=i();return`Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${so} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${l()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`}function s(){return u()}var d=p(()=>Ae({})),h=p(()=>c({message:n().describe("Confirmation that plan mode was entered")})),DVr=vn({registryToolId:"1ebcdd8b-f962-5486-b990-a98460bb97a2",name:OA,searchHint:"switch to plan mode to design an approach before coding",backgrounding:"never",maxResultSizeChars:1e5,async description(){return"Requests permission to enter plan mode for complex tasks requiring exploration and design"},async prompt(){return s()},get inputSchema(){return d()},get outputSchema(){return h()},userFacingName(){return""},whenToUse:"When you are about to start writing code for a task that is not simple, use it and not a start on the edits, so that the user approves the approach first.",shouldDefer:!0,isEnabled(){return lie.isEnabled()},isConcurrencySafe(){return!0},isReadOnly(){return!0},renderToolUseMessage(){return null},create(e){return{async validateInput(t){if(e.agentId)return{result:!1,message:"Only the main session can enter plan mode.",errorCode:1};return{result:!0}},async checkPermissions(t){let{mode:o}=e.permissions();return Y()&&o!=="auto"&&o!=="plan"?{behavior:"ask",message:"Enter plan mode?",updatedInput:t,personOnly:!0,decisionReason:{type:"safetyCheck",reason:Unr()?"In plan mode, an automatic check may approve read-only actions that you would otherwise be asked about.":"In plan mode, you are still asked about every action that you would otherwise be asked about.",classifierApprovable:!1}}:{behavior:"allow",updatedInput:t}},async call(t){if(e.agentId)throw Error("EnterPlanMode tool cannot be used in agent contexts");let o=e.permissions().mode;return pVe(o,"plan"),e.setToolPermissionContext((a)=>{if(a.mode==="plan")return a;let r=Jh(uXt(a),{type:"setMode",mode:"plan",destination:"session"});return o==="auto"&&a.mode==="auto"?{...r,planEnteredBy:"model"}:r}),{data:{message:"Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."}}}}},mapToolResultToToolResultBlockParam({message:e},t){return{type:"tool_result",content:`${e}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${so} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${iS} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,tool_use_id:t}}});
export{DVr};
