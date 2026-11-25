// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{se}from"/$bunfs/root/chunk-0rkwgmhx.js";import{exr,b}from"/$bunfs/root/chunk-865at33z.js";import{dle}from"/$bunfs/root/chunk-f2vegtjy.js";import{zd}from"/$bunfs/root/chunk-p1ewvgeh.js";import{SAn,hFa}from"/$bunfs/root/chunk-zfx767v7.js";import{randomUUID as c}from"crypto";var f="<!-- dataviz-callout -->",u="tengu_tingly_petal",g=16,e=()=>"",o;function IPa(t){e=t}async function DZn(t,i=c()){if(t!==void 0&&exr(t)&&b(u,!1)===!0){let{CONTRACT_MD:s,dealDesignGuide:d}=await import("/$bunfs/root/chunk-v8rvzaxg.js"),l=dle()?`Thumbnail (optional): ${SAn}

`:"",r=`${s}
${l}${d(i)}`,{drawnDesignBodies:n}=se();n.set(i,r);for(let m of[...n.keys()].slice(0,-g))n.delete(m);return r}let{SKILL_MD:a}=await import("/$bunfs/root/chunk-w3n5np54.js");return o=hFa(zd(a).content.trimStart().replace(f,()=>e())),o}function MPa(t){return se().drawnDesignBodies.get(t??"")??o}
export{IPa,DZn,MPa};
