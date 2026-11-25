// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d,w}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{q}from"/$bunfs/root/chunk-k266h4m8.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{PI,rme}from"/$bunfs/root/chunk-zryj96fm.js";import*as i from"fs/promises";function Agr(){let e=s.CLAUDE_CODE_ENVIRONMENT_KIND;if(e==="byoc"||e==="anthropic_cloud")return e;return null}function S2(e,r){return Boolean(e)&&(!r||r==="anthropic_cloud")}async function val(){if(!S2(s.CLAUDE_CODE_REMOTE_SESSION_ID,s.CLAUDE_CODE_ENVIRONMENT_KIND))return;try{let e=[PI(),rme()];await Promise.all(e.map((r)=>i.mkdir(r).catch((o)=>{let n=w(o);if(n!=="EEXIST"&&n!=="ENOENT")q("warn","user_data_roots_mkdir_failed",{code:n??"unknown"})})))}catch(e){t(`uploads and outputs directories not created: ${d(e)}`,{level:"error"})}}
export{Agr,S2,val};
