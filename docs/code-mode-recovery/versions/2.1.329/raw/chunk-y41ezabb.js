// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{oe}from"/$bunfs/root/chunk-chsxmm1h.js";import{Iwr,b}from"/$bunfs/root/chunk-aq3ms068.js";import{_ie}from"/$bunfs/root/chunk-vm00nwct.js";import{Qd}from"/$bunfs/root/chunk-32gs4rex.js";import{Iwn,VAa}from"/$bunfs/root/chunk-zh2wna9y.js";import{randomUUID as c}from"crypto";var f="<!-- dataviz-callout -->",u="tengu_tingly_petal",g=16,e=()=>"",o;function OSa(t){e=t}async function a8n(t,i=c()){if(t!==void 0&&Iwr(t)&&b(u,!1)===!0){let{CONTRACT_MD:s,dealDesignGuide:d}=await import("/$bunfs/root/chunk-fz04fzv2.js"),l=_ie()?`Thumbnail (optional): ${Iwn}

`:"",r=`${s}
${l}${d(i)}`,{drawnDesignBodies:n}=oe();n.set(i,r);for(let m of[...n.keys()].slice(0,-g))n.delete(m);return r}let{SKILL_MD:a}=await import("/$bunfs/root/chunk-te70epk6.js");return o=VAa(Qd(a).content.trimStart().replace(f,()=>e())),o}function ISa(t){return oe().drawnDesignBodies.get(t??"")??o}
export{OSa,a8n,ISa};
