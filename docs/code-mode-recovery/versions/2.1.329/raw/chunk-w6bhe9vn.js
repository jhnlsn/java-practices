// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{qS}from"/$bunfs/root/chunk-5w3q3ks2.js";import{V,Ae}from"/$bunfs/root/chunk-kgzzwvwc.js";import{S,u}from"/$bunfs/root/chunk-y98mhv74.js";import{D,d,T1}from"/$bunfs/root/chunk-avbzeyf3.js";import{I}from"/$bunfs/root/chunk-m55722gg.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{wZ}from"/$bunfs/root/chunk-0v6g5ynk.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{f,m}from"/$bunfs/root/chunk-3mgc6ahd.js";import{_r}from"/$bunfs/root/chunk-0yzsvyn8.js";import{At}from"/$bunfs/root/chunk-pxy9yt8m.js";import{b,V_,tc,Oae}from"/$bunfs/root/chunk-aq3ms068.js";import{it,Dt}from"/$bunfs/root/chunk-5ghdkswv.js";import{xDn,VT,F_,Em,duo,qye,BK}from"/$bunfs/root/chunk-32gs4rex.js";import{DS}from"/$bunfs/root/chunk-f0jgxfa3.js";import{hSe}from"/$bunfs/root/chunk-mtcj8wbs.js";import{Dg,M2,Vwt}from"/$bunfs/root/chunk-kq2z2kwr.js";import{Yoo}from"/$bunfs/root/chunk-g10jc9b1.js";import{Yoe,Tce,pM,LCn,De,It,fXr}from"/$bunfs/root/chunk-hg1yqkjk.js";import{vJa,qh}from"/$bunfs/root/chunk-xpxp0jg6.js";import{J1r,Q1r,HNo,DNo,LNo,wJe,NNo}from"/$bunfs/root/chunk-2gn6xd4c.js";import{Yqt,Bma,Xqt,Wma}from"/$bunfs/root/chunk-q1509jc1.js";import{Jv,vS}from"/$bunfs/root/chunk-wrjcstwp.js";import{Of}from"/$bunfs/root/chunk-v16rzw0k.js";import{lfe,gbt}from"/$bunfs/root/chunk-94yxdtrt.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";function re(){return b("tengu_onyx_plover",null)}function Z3n(){let e=re();return e?.enabled===!0||e?.available===!0}function Nqt(){if(!Z3n())return!1;let e=At().autoDreamEnabled;if(e!==void 0)return e;return re()?.enabled===!0}class oe{runner=null}var X=new j(()=>new oe);var ce="## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",fe=`### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;function ne(e,r,l,_=!1,p=!1,o=!1,n=!1){return`# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${Vwt}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${_?`
${ce}
`:""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${Dg}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${p?` The ${VT} / ${F_} / ${Em} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.`:""}${""}${n?" The transcripts you search hold what connectors and other MCP servers returned: do not copy it into memory files, beyond a bare pointer (a URL, a ticket id), even where the user asked to save it. You can still save what the user themselves said or decided about it.":""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${Dg}\` so it stays under ${M2} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${fe}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${l?`

## Additional context

${l}`:""}`}var pe=30;function J(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="dream"}function se(e,r){let l=Jv("dream"),_={...vS(l,"dream","dreaming"),type:"dream",status:"running",skipTranscript:!0,phase:"starting",sessionsReviewing:r.sessionsReviewing,filesTouched:[],turns:[],abortController:r.abortController,priorMtime:r.priorMtime,...r.storageV5!==void 0&&{storageV5:r.storageV5}};return e.register(_),l}function ae(e,r,l,_){_.update(e,(p)=>{let o=new Set(p.filesTouched),n=l.filter((s)=>!o.has(s)&&o.add(s));if(r.text===""&&r.toolUseCount===0&&n.length===0)return p;return{...p,phase:n.length>0?"updating":p.phase,filesTouched:n.length>0?[...p.filesTouched,...n]:p.filesTouched,turns:p.turns.slice(-(pe-1)).concat(r)}})}function ie(e,r){Yoe(r,e,"completed"),f("task_dream")}function me(e,r){Yoe(r,e,"failed"),m("task_dream","task_dream_failed")}var w=null,ge=600000,ye=new RegExp(`^\\s*(?:${DNo})\\b`,"i"),le={minHours:24,minSessions:5};function _e(){let e=b("tengu_onyx_plover",null);return{minHours:typeof e?.minHours==="number"&&Number.isFinite(e.minHours)&&e.minHours>0?e.minHours:le.minHours,minSessions:typeof e?.minSessions==="number"&&Number.isFinite(e.minSessions)&&e.minSessions>0?e.minSessions:le.minSessions}}function we(){if(_r()!==null)return!1;if(wZ())return!1;if(!V_())return!1;if(hSe())return!1;return Nqt()}function ke(){return!1}function upa(e){let r=0,l=!1,_=new Set;X.of(e).runner=async function(o,n){let s=_e(),c=ke();if(!c&&!we())return;let v;try{v=await Yqt(void 0,o.toolUseContext.storageV5)}catch(i){t(`[autoDream] readLastConsolidatedAt failed: ${d(i)}`);return}let W=(Date.now()-v)/3600000;if(!c&&W<s.minHours)return;let K=Date.now()-r;if(!c&&K<ge){t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(K/1000)}s ago`);return}r=Date.now();let x,h;try{x=DS(Ae()),h=await Wma(v,o.toolUseContext.storageV5,x)}catch(i){t(`[autoDream] listSessionsTouchedSince failed: ${d(i)}`);return}let de=V();if(h=h.filter((i)=>i!==de),!c&&h.length<s.minSessions){t(`[autoDream] skip \u2014 ${h.length} sessions since last consolidation, need ${s.minSessions}`),a("tengu_auto_dream_skipped",{reason:S("sessions"),session_count:h.length,min_required:s.minSessions});return}let B=LNo(o.toolUseContext.getAppState().toolPermissionContext,Oae());if(B!==void 0){if(t(`[autoDream] skip \u2014 ${Q1r(B)} would refuse memory writes`),a("tengu_auto_dream_skipped",{reason:S("permission_rule")}),n!==void 0){let i=HNo(e,B,tc());if(i!==void 0)n(It(i,"warning"))}return}let T;if(c)T=v;else{try{T=await Bma(o.toolUseContext.storageV5)}catch(i){t(`[autoDream] lock acquire failed: ${d(i)}`);return}if(T===null){a("tengu_auto_dream_skipped",{reason:S("lock")});return}}let A=tc(),U=void 0,g=U==="unplaced"||U==="capped"?void 0:U;if(g==="newer"||g!==void 0&&"unreadable"in g){if(!c)await Xqt(T,o.toolUseContext.storageV5);if(g!=="newer"){if(t(`[autoDream] skipped: the memory items could not be read (cause: ${g.unreadable}); the warning above says why and what resumes consolidation`),a("tengu_auto_dream_skipped",{reason:S("items_unreadable")}),w!==null&&n!==void 0&&!_.has(g.unreadable))_.add(g.unreadable),n?.(It(await w.unreadableItemsNotice(g.unreadable,A),"warning"));return}if(t("[autoDream] skip \u2014 newer item record"),a("tengu_auto_dream_skipped",{reason:S("record_newer")}),w!==null&&n!==void 0&&!l)l=!0,n?.(It(w.NEWER_RECORD_NOTICE,"warning"));return}{let i=[],L=await Yoo(["--no-config","--no-ignore","--hidden","--text","--no-filename","--no-line-number","--fixed-strings","--glob","*.jsonl*","--regexp",'"type":"hybrid-organization"'],x,AbortSignal.timeout(60000),(C)=>{i.push(...C)}).then((C)=>C==="complete"?void 0:C,d);if(L!==void 0)t(`[autoDream] the search for marks of an organization sign-in failed: ${L}`);let O=L!==void 0?"hybrid_organization_check_failed":!BK("session_provider",lfe(gbt(i.join(`
`)),!0))?"other_hybrid_organization":void 0;if(O!==void 0){if(!c)await Xqt(T,o.toolUseContext.storageV5);t(`[autoDream] skip \u2014 ${O}`),a("tengu_auto_dream_skipped",{reason:u(O)});return}}let Y=qye();t(`[autoDream] firing \u2014 ${W.toFixed(1)}h since last, ${h.length} sessions to review`),a("tengu_auto_dream_fired",{hours_since:Math.round(W),sessions_since:h.length,team_memory_enabled:Y});let{taskRegistry:N}=o.toolUseContext,R=new AbortController,P=se(N,{sessionsReviewing:h.length,priorMtime:T,abortController:R,storageV5:o.toolUseContext.storageV5}),F="fork";try{let i=`

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${h.length}):
${h.map((y)=>`- ${y}`).join(`
`)}`,L=!1,O=ne(A,x,i,Y,duo(),!1,xDn()),C=Se(P,N,A),z=new Map,G=new Set,Q=!1,Z=!1,q=!1,M,ee=qS("auto_dream"),te=()=>qh(vJa(x),[],ee);te();try{M=await pM({promptMessages:[De({content:O})],cacheSafeParams:Tce(o),canUseTool:NNo(A,g!==void 0?w?.keptItemsOf(g):void 0,{fork:"dream",onWriteAllowed:(y,H)=>z.set(H,y)}),querySource:"auto_dream",forkLabel:"auto_dream",skipTranscript:!0,overrides:{abortController:R,agentId:ee},onMessage:(y)=>{if(C(y),be(y,G),y.type==="user")te();if(y.type==="assistant")Q=y.isApiErrorMessage===!0},skipCacheWrite:LCn()}),Z=!0,q=!R.signal.aborted&&!Q}finally{let y=new Set([...z].filter(([k])=>!q||!G.has(k)).map(([,k])=>k)),H=new Set([...z].filter(([k])=>q&&G.has(k)).map(([,k])=>k));if(w!==null&&U==="capped")await w.deferCappedRunWrites({memoryDir:A,dreamWrote:y,mayHaveWritten:H});if(w!==null&&g!==void 0){let k=await w.settleDreamItems({memoryDir:A,before:g,dreamWrote:y,mayHaveWritten:H});if((k.skipped||k.failed)&&Z&&!R.signal.aborted&&!c&&await w.claimLockGiveBack(A))await Xqt(T,o.toolUseContext.storageV5)}}F="completion",ie(P,N);let E=o.toolUseContext.taskRegistry.get(P),ue=J(E)?E.filesTouched.length:0;if(J(E)&&E.filesTouched.length>0)n?.({...fXr(E.filesTouched),verb:"Improved"}),await J1r(o.toolUseContext,{source:"dream",summary:`consolidated ${E.filesTouched.length} ${I(E.filesTouched.length,"memory file")}`,paths:E.filesTouched});t(`[autoDream] completed \u2014 cache: read=${M.totalUsage.cache_read_input_tokens} created=${M.totalUsage.cache_creation_input_tokens}`),a("tengu_auto_dream_completed",{cache_read:M.totalUsage.cache_read_input_tokens,cache_created:M.totalUsage.cache_creation_input_tokens,output:M.totalUsage.output_tokens,sessions_reviewed:h.length,files_touched_count:ue,team_memory_enabled:Y,account_memory_line_rendered:!1})}catch(i){if(R.signal.aborted){t("[autoDream] aborted by user");return}if(t(`[autoDream] ${F} failed: ${d(i)}`),a("tengu_auto_dream_failed",{phase:u(F),error_class:T1(D(i))}),F==="fork")me(P,N),await Xqt(T,o.toolUseContext.storageV5)}}}function be(e,r){if(e.type!=="user"||e.toolDenialKind!==void 0||typeof e.message.content==="string")return;for(let l of e.message.content)if(l.type==="tool_result"&&l.is_error===!0)r.add(l.tool_use_id)}function Se(e,r,l){return(_)=>{if(_.type!=="assistant")return;let p="",o=0,n=[];for(let s of _.message.content)if(s.type==="text")p+=s.text;else if(s.type==="tool_use"){if(o++,s.name===it||s.name===Dt){let c=s.input;if(typeof c.file_path==="string")n.push(c.file_path)}else if(Of.includes(s.name)){let c=s.input;if(typeof c.command==="string"&&ye.test(c.command))for(let v of c.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g))n.push(v[0].replace(/^["']|["']$/g,""))}}ae(e,{text:p.trim(),toolUseCount:o},n.filter((s)=>wJe(s,l)),r)}}async function fpa(e,r){await X.of(e.toolUseContext.session.host).runner?.(e,r)}
export{Z3n,Nqt,upa,fpa};
