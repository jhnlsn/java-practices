// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{t}from"/$bunfs/root/chunk-w578pjby.js";import{u,l}from"/$bunfs/root/chunk-cqa9hrgx.js";import{YTe,rQ,MW}from"/$bunfs/root/chunk-bzyb60p0.js";import{ZF}from"/$bunfs/root/chunk-tfs0ssqe.js";import{kMe}from"/$bunfs/root/chunk-q0fr3q7r.js";async function Rgt(){ZF(),MW(),YTe(),rQ.emit();try{await kMe.rehome(),u("skill_directory_reload")}catch(r){t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,{level:"error"}),l("skill_directory_reload","rehome_failed")}}
export{Rgt};
