// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{bn}from"/$bunfs/root/chunk-ca90c7br.js";import{sj}from"/$bunfs/root/chunk-7wp4ws2d.js";import{ldt}from"/$bunfs/root/chunk-dmqpmzm4.js";import{execFile as i}from"child_process";import{promisify as n}from"util";var s=n(i);async function V$t(o){let t=sj("git");if(t===null||ldt(t,process.env))return[];try{let{stdout:r}=await s(t,["-c","core.hooksPath=/dev/null","-c","core.fsmonitor=","worktree","list","--porcelain"],{cwd:o,timeout:5000,windowsHide:!0});if(!r)return[];return r.split(`
`).filter((e)=>e.startsWith("worktree ")).map((e)=>bn(e.slice(9)))}catch{return[]}}
export{V$t};
