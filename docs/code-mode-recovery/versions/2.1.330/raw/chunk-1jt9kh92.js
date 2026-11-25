// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{tX}from"/$bunfs/root/chunk-hrmqj4hy.js";import{Qpi,yfe,CNt,N_}from"/$bunfs/root/chunk-bzyb60p0.js";async function bVs(r,o){if(s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL||!tX())return t("plugin worktree hooks not registered ahead of the worktree: startup lists no plugins here"),"skipped";try{if(await CNt(r))yfe(),N_("registerWorktreeHooksAhead: seed marketplaces registered")}catch(e){t(`seed marketplaces not registered ahead of the worktree: ${d(e)}`,{level:"warn"})}try{return await Qpi(r,o),"registered"}catch(e){return t(`plugin worktree hooks not registered ahead of the worktree (a plugin's WorktreeCreate or WorktreeRemove hook will not run): ${d(e)}`,{level:"warn"}),"failed"}}
export{bVs};
