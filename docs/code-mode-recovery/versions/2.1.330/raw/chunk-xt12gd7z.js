// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{b}from"/$bunfs/root/chunk-865at33z.js";import{d,J}from"/$bunfs/root/chunk-jv7av99m.js";import{Nl}from"/$bunfs/root/chunk-2gtmjt3y.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import{Em}from"/$bunfs/root/chunk-q3a5dy2r.js";import{cr}from"/$bunfs/root/chunk-jxja0v0z.js";import{constants as r}from"fs";import{open as f}from"fs/promises";import{join as s}from"path";var c="tengu_enchanted_island",O=1040;function Cei(){return x()!=="windows"&&process.getuid?.()!==0&&b(c,!0)}async function gNa(){let e=Nl();if(e===null||!Cei())return;for(let n of[Em(),s(e,"plans"),s(e,"debug")])try{let o=await f(n,r.O_RDONLY|r.O_DIRECTORY|r.O_NOFOLLOW|r.O_NONBLOCK|cr);try{let{mode:i,uid:m}=await o.stat();if((i&7)!==0&&m===process.getuid?.()){let a=(i&O)!==0;await o.chmod(i&4095&~(a?7:63))}}finally{await o.close()}}catch(o){if(!J(o))t(`Did not change the permissions of ${n}: ${d(o)}`)}}
export{Cei,gNa};
