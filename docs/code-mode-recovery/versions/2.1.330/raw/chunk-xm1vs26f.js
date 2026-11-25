// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Mt}from"/$bunfs/root/chunk-7cfjrnwy.js";import{Xdt}from"/$bunfs/root/chunk-xfj2cwfv.js";import{Aht,SY}from"/$bunfs/root/chunk-x8bs72nm.js";import{of,OEo,T9}from"/$bunfs/root/chunk-mh32mevx.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";var A="tengu_temporal_nautilus",k=/[\v\f\r\x1c-\x1e\u0085\u2028\u2029](?=[^\n])/g,d=20,B=65536,E=/[\p{Zs}\u2800]/gu;function f(){return{furtherBreaks:d,inlineMarkChars:B,marksRanOut:!1}}function Bve(){return Pe(A,{safe:!0})}function p(r){let t=r.charCodeAt(0);return(t>=128||t===91)&&OEo(of(r)).replace(E," ").startsWith(SY)?r.replace("[","\uFFFD"):r}function w(r,t){let e=p(r);if(e.search(k)===-1)return[e];let n="",s=0,i=0,o=Aht;for(let{index:a}of e.matchAll(k)){let R=e.slice(s,a+1),c=h(R),u=i===0||t.furtherBreaks>0;if(i>0&&(a>=Xdt||!u&&t.inlineMarkChars<=0)){t.marksRanOut=!0;break}if(c>o&&o<Aht)n=m(n),o=Aht;if(u&&i>0)t.furtherBreaks--;if(!u)t.inlineMarkChars-=SY.length;let g=u||c+SY.length>o;n+=`${R}${g?`
`:""}${SY}`,o=g?Aht:o-c-SY.length,i++,s=a+1}let l=e.slice(s);if(h(l)>o&&o<Aht)n=m(n);return`${n}${l}`.split(`
`)}function h(r){return r.length+7*Mt(r,"\t")}function m(r){return`${r.slice(0,-SY.length)}
${SY}`}function _(r,t){return r.split(`
`).flatMap((e)=>w(e,t)).join(`
`)}function Wve(r,t=Bve()){return t?_(r,f()):r}function Met(r,t=Bve()){if(!t)return T9(r);let e=f(),n=_(r,e);return e.marksRanOut||T9(r)||n!==r&&T9(n)}function iHt(r){if(!Bve())return r;let t=f(),e=r.lines.flatMap((n)=>n.startsWith("+")?w(n.slice(1),t).map((s)=>`+${s}`):[`${n.charAt(0)}${p(n.slice(1))}`]);return{...r,lines:e,rowsBroken:!0}}
export{Bve,Wve,Met,iHt};
