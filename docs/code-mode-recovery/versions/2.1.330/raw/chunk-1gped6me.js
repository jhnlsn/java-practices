// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{Qg,Is,BW}from"/$bunfs/root/chunk-9e5mdyfk.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";var t="--inherit-permission-mode";function d(e){return e===t||e.startsWith(`${t}=`)}class f{mode}var c=new j(()=>new f);function p(){return c.of(N().host)}function wTa({inheritPermissionModeCli:e,resolvedMode:n,storageV5:r}){if(!e)return;p().mode=n,BW("--permission-mode",[t],n,void 0,r).catch((o)=>i(o))}async function kTa(e){let n=p(),r=n.mode;if(r===void 0)return;let o=s.CLAUDE_JOB_DIR;if(!o||s.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let a=await Is(o,e);if(!a?.respawnFlags)return;if(!a.respawnFlags.some(d)){n.mode=void 0;return}await BW("--permission-mode",[t],r,void 0,e,void 0,(u)=>u.some(d)),Qg(o);let m=await Is(o,e);if(m?.respawnFlags&&!m.respawnFlags.some(d))n.mode=void 0}
export{wTa,kTa};
