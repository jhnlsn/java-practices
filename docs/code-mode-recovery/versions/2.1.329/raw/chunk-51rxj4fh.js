// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{Wie}from"/$bunfs/root/chunk-bj9p89mj.js";import{Kri,Rce,i0t,Db}from"/$bunfs/root/chunk-hg1yqkjk.js";async function z1s(r,o){if(s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL||!Wie())return t("plugin worktree hooks not registered ahead of the worktree: startup lists no plugins here"),"skipped";try{if(await i0t(r))Rce(),Db("registerWorktreeHooksAhead: seed marketplaces registered")}catch(e){t(`seed marketplaces not registered ahead of the worktree: ${d(e)}`,{level:"warn"})}try{return await Kri(r,o),"registered"}catch(e){return t(`plugin worktree hooks not registered ahead of the worktree (a plugin's WorktreeCreate or WorktreeRemove hook will not run): ${d(e)}`,{level:"warn"}),"failed"}}
export{z1s};
