// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
class c{#r;#e=0;#t=[];constructor(e){this.#r=e}acquire(){if(this.#e<this.#r)return this.#e++,Promise.resolve();return new Promise((e)=>{this.#t.push(e)})}release(){let e=this.#t.shift();if(e)e();else this.#e--}}function Rl(e,s){let r=new c(e);return async(...i)=>{await r.acquire();try{return await s(...i)}finally{r.release()}}}function OEl(e,s,r){let i=Rl(e,r);return async(n)=>i(n,await s(n))}function kLe(e){let s=Rl(e,(r)=>new Promise((i)=>r(i)));return{acquire:()=>new Promise((r)=>void s(r))}}function IEl(e,s,r,i){let n=new Set,o=[];function g({bytes:t}){let a=[...n].reduce((u,l)=>u+l.bytes,0);return n.size===0||n.size<e&&a+t<=s}function d(){for(let t=o[0];t!==void 0&&g(t);t=o[0])o.shift(),n.add(t),t.start()}return async(...t)=>{let a=Math.max(0,r(...t)),u=await new Promise((l)=>{let m={bytes:a,start:()=>l(m)};o.push(m),d()});try{return await i(...t)}finally{n.delete(u),d()}}}
export{Rl,OEl,kLe,IEl};
