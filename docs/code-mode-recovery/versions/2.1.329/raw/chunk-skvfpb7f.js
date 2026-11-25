// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{b}from"/$bunfs/root/chunk-aq3ms068.js";import{d,J}from"/$bunfs/root/chunk-avbzeyf3.js";import{jl}from"/$bunfs/root/chunk-8wtweva8.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{x}from"/$bunfs/root/chunk-kg2zehkt.js";import{Ym}from"/$bunfs/root/chunk-x7f8sr97.js";import{sr}from"/$bunfs/root/chunk-yj4act9t.js";import{constants as r}from"fs";import{open as f}from"fs/promises";import{join as s}from"path";var c="tengu_enchanted_island",O=1040;function l5s(){return x()!=="windows"&&process.getuid?.()!==0&&b(c,!0)}async function mAa(){let e=jl();if(e===null||!l5s())return;for(let n of[Ym(),s(e,"plans"),s(e,"debug")])try{let o=await f(n,r.O_RDONLY|r.O_DIRECTORY|r.O_NOFOLLOW|r.O_NONBLOCK|sr);try{let{mode:i,uid:m}=await o.stat();if((i&7)!==0&&m===process.getuid?.()){let a=(i&O)!==0;await o.chmod(i&4095&~(a?7:63))}}finally{await o.close()}}catch(o){if(!J(o))t(`Did not change the permissions of ${n}: ${d(o)}`)}}
export{l5s,mAa};
