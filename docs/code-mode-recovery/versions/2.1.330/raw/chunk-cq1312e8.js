// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{pn}from"/$bunfs/root/chunk-z6pfqf6e.js";import{m2}from"/$bunfs/root/chunk-ds5wjsjg.js";import{Fft}from"/$bunfs/root/chunk-6tyx83ga.js";import{execFile as i}from"child_process";import{promisify as n}from"util";var s=n(i);async function AGt(o){let t=m2("git");if(t===null||Fft(t,process.env))return[];try{let{stdout:r}=await s(t,["-c","core.hooksPath=/dev/null","-c","core.fsmonitor=","worktree","list","--porcelain"],{cwd:o,timeout:5000,windowsHide:!0});if(!r)return[];return r.split(`
`).filter((e)=>e.startsWith("worktree ")).map((e)=>pn(e.slice(9)))}catch{return[]}}
export{AGt};
