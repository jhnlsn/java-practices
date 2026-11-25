// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d,w}from"/$bunfs/root/chunk-jv7av99m.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{q}from"/$bunfs/root/chunk-42tcgre6.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{eP,tge}from"/$bunfs/root/chunk-6mfepmbb.js";import*as i from"fs/promises";function UEr(){let e=s.CLAUDE_CODE_ENVIRONMENT_KIND;if(e==="byoc"||e==="anthropic_cloud")return e;return null}function FG(e,r){return Boolean(e)&&(!r||r==="anthropic_cloud")}async function hSl(){if(!FG(s.CLAUDE_CODE_REMOTE_SESSION_ID,s.CLAUDE_CODE_ENVIRONMENT_KIND))return;try{let e=[eP(),tge()];await Promise.all(e.map((r)=>i.mkdir(r).catch((o)=>{let n=w(o);if(n!=="EEXIST"&&n!=="ENOENT")q("warn","user_data_roots_mkdir_failed",{code:n??"unknown"})})))}catch(e){t(`uploads and outputs directories not created: ${d(e)}`,{level:"error"})}}
export{UEr,FG,hSl};
