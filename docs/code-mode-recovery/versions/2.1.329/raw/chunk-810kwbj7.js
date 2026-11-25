// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Mt}from"/$bunfs/root/chunk-m55722gg.js";import{Iit}from"/$bunfs/root/chunk-w03c3634.js";import{Xut,x9}from"/$bunfs/root/chunk-jnbzjg28.js";import{Wu,yho,G3}from"/$bunfs/root/chunk-xwebhva4.js";import{Ie}from"/$bunfs/root/chunk-b03afx74.js";var A="tengu_temporal_nautilus",k=/[\v\f\r\x1c-\x1e\u0085\u2028\u2029](?=[^\n])/g,d=20,B=65536,E=/[\p{Zs}\u2800]/gu;function f(){return{furtherBreaks:d,inlineMarkChars:B,marksRanOut:!1}}function Ike(){return Ie(A,{safe:!0})}function p(r){let t=r.charCodeAt(0);return(t>=128||t===91)&&yho(Wu(r)).replace(E," ").startsWith(x9)?r.replace("[","\uFFFD"):r}function w(r,t){let e=p(r);if(e.search(k)===-1)return[e];let n="",s=0,i=0,o=Xut;for(let{index:a}of e.matchAll(k)){let R=e.slice(s,a+1),c=h(R),u=i===0||t.furtherBreaks>0;if(i>0&&(a>=Iit||!u&&t.inlineMarkChars<=0)){t.marksRanOut=!0;break}if(c>o&&o<Xut)n=m(n),o=Xut;if(u&&i>0)t.furtherBreaks--;if(!u)t.inlineMarkChars-=x9.length;let g=u||c+x9.length>o;n+=`${R}${g?`
`:""}${x9}`,o=g?Xut:o-c-x9.length,i++,s=a+1}let l=e.slice(s);if(h(l)>o&&o<Xut)n=m(n);return`${n}${l}`.split(`
`)}function h(r){return r.length+7*Mt(r,"\t")}function m(r){return`${r.slice(0,-x9.length)}
${x9}`}function _(r,t){return r.split(`
`).flatMap((e)=>w(e,t)).join(`
`)}function Mke(r,t=Ike()){return t?_(r,f()):r}function NJe(r,t=Ike()){if(!t)return G3(r);let e=f(),n=_(r,e);return e.marksRanOut||G3(r)||n!==r&&G3(n)}function aPt(r){if(!Ike())return r;let t=f(),e=r.lines.flatMap((n)=>n.startsWith("+")?w(n.slice(1),t).map((s)=>`+${s}`):[`${n.charAt(0)}${p(n.slice(1))}`]);return{...r,lines:e,rowsBroken:!0}}
export{Ike,Mke,NJe,aPt};
