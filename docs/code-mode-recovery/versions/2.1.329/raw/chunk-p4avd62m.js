// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{I_,Ms,DB}from"/$bunfs/root/chunk-yzxvzrvh.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";var t="--inherit-permission-mode";function d(e){return e===t||e.startsWith(`${t}=`)}class f{mode}var c=new j(()=>new f);function p(){return c.of(N().host)}function kma({inheritPermissionModeCli:e,resolvedMode:n,storageV5:r}){if(!e)return;p().mode=n,DB("--permission-mode",[t],n,void 0,r).catch((o)=>i(o))}async function Ema(e){let n=p(),r=n.mode;if(r===void 0)return;let o=s.CLAUDE_JOB_DIR;if(!o||s.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let a=await Ms(o,e);if(!a?.respawnFlags)return;if(!a.respawnFlags.some(d)){n.mode=void 0;return}await DB("--permission-mode",[t],r,void 0,e,void 0,(u)=>u.some(d)),I_(o);let m=await Ms(o,e);if(m?.respawnFlags&&!m.respawnFlags.some(d))n.mode=void 0}
export{kma,Ema};
