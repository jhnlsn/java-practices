// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Te}from"/$bunfs/root/chunk-p2amrmaz.js";import{Mt}from"/$bunfs/root/chunk-m55722gg.js";import{gTt,se}from"/$bunfs/root/chunk-t4zrtehh.js";import{uy}from"/$bunfs/root/chunk-r3zpj4t6.js";import{Fb}from"/$bunfs/root/chunk-agzp5565.js";import{rK,Q0t}from"/$bunfs/root/chunk-azzyxyps.js";import{Rr}from"/$bunfs/root/chunk-74jsynkt.js";function p(){let t=Fb("app:toggleTranscript","Global","ctrl+o");return Te.dim(`(${t} to expand)`)}var l=3,u=10;function d(t){return(rK()?Q0t(t):t).split(`
`)}function g(t,s){let r=d(t),n=[];for(let e of r){let a=se(e);if(a<=s)n.push(e.trimEnd());else{let m=0;while(m<a){let c=gTt(e,m,m+s);n.push(c.trimEnd()),m+=s}}}let o=n.length-l;if(o===1)return{aboveTheFold:n.slice(0,l+1).join(`
`).trimEnd(),remainingLines:0};return{aboveTheFold:n.slice(0,l).join(`
`).trimEnd(),remainingLines:Math.max(0,o)}}function xli(t,s,r=!1){let n=t.trimEnd();if(!n)return"";let o=Math.max(s-u,10),e=l*o*4,a=n.length>e,m=a?n.slice(0,e):n,{aboveTheFold:c,remainingLines:i}=g(m,o),f=i;if(a){let h=Math.max(Mt(n,`
`)+1,Math.ceil(Rr(n).length/o));f=Math.max(1,i,h-l)}return[c,f>0?Te.dim(uy(f)+(r?"":` ${p()}`)):""].filter(Boolean).join(`
`)}function nK(t,s){if(typeof t!=="string")return!1;let r=t.trimEnd(),n=0,o=0;for(let i=0;i<=l;i++){if(n=r.indexOf(`
`,n),n===-1)break;o++,n++}if(n!==-1&&n<r.length)return!0;if(s===void 0)return!1;let e=Math.max(s-u,10),a=l+1,m=l*e*4;if(r.length>m)return!0;if(o===0&&!rK()){let i=a*e;if(r.length<=i)return!1;return se(r)>i}let c=0;for(let i of d(r))if(c+=Math.max(1,Math.ceil(se(i)/e)),c>a)return!0;return!1}
export{xli,nK};
