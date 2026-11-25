// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{fu}from"/$bunfs/root/chunk-hn0x7v1y.js";import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{e}from"/$bunfs/root/chunk-a46xeenj.js";import{nf,H,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function O(N){return{...N}}function Nse(d,o){let c=k(10),S;if(c[0]!==d)S={screen:d,depth:0},c[0]=d,c[1]=S;else S=c[1];let[t,r,p]=fu(S),f,h;if(c[2]!==r)f=()=>()=>r(O),h=[r],c[2]=r,c[3]=f,c[4]=h;else f=c[3],h=c[4];H(f,h);let i;if(c[5]!==p||c[6]!==o||c[7]!==r||c[8]!==t)i={top:t.screen,depth:t.depth,push(v,x){if(p()!==t){return!1}let C={...t,screen:x??t.screen};return r({screen:v,depth:t.depth+1,under:C}),!0},back(){if(p()!==t){return}if(t.under)r(t.under);else o()}},c[5]=p,c[6]=o,c[7]=r,c[8]=t,c[9]=i;else i=c[9];return i}function vZe(d){let t=k(6),{stack:o,children:c}=d;const S=o.depth;let r;if(t[0]!==c||t[1]!==o.top)r=c(o.top),t[0]=c,t[1]=o.top,t[2]=r;else r=t[2];let p;if(t[3]!==o.depth||t[4]!==r)p=e(nf,{children:r},S),t[3]=o.depth,t[4]=r,t[5]=p;else p=t[5];return p}
export{Nse,vZe};
