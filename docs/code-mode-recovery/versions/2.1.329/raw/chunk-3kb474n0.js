// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{f,l}from"/$bunfs/root/chunk-3mgc6ahd.js";import{$1,BEe,uX,VV}from"/$bunfs/root/chunk-hg1yqkjk.js";import{lOe}from"/$bunfs/root/chunk-p5bkfxqk.js";async function Kft(){$1(),VV(),BEe(),uX.emit();try{await lOe.rehome(),f("skill_directory_reload")}catch(r){t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,{level:"error"}),l("skill_directory_reload","rehome_failed")}}
export{Kft};
