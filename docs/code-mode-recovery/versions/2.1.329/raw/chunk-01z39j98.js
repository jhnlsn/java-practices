// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{J}from"/$bunfs/root/chunk-avbzeyf3.js";import{xb,m1,Zq}from"/$bunfs/root/chunk-k936fbc4.js";import{Ds}from"/$bunfs/root/chunk-92tjbk8v.js";import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{createWriteStream as E}from"fs";import{rename as f,stat as L,unlink as l}from"fs/promises";var d=10485760,I=new RegExp(`[${xb}]`,"gu");function JMs(t){let e=Ds(t).trimEnd();return e.includes(`
`)?m1(_(e)):e.replace(I,Zq)}async function sIo(t){let e=process.stdout.isTTY,n=await L(t).then((c)=>c.size).catch(()=>0);if(n>d)await w(t),n=0;let r=p(t),i=null,o=null,a=!1;return{write(c,y){let s=`[${new Date().toISOString()}] [${c}] ${JMs(y)}
`;if(e)process.stdout.write(s);if(a)return;if(n+=Buffer.byteLength(s),o)o.push(s);else r.write(s);if(n>d&&!i){let S=r,u=[];o=u,i=(async()=>{try{await g(S),await w(t),r=p(t),n=0;for(let m of u)n+=Buffer.byteLength(m),r.write(m)}catch{}finally{o=null,i=null}})()}},async close(){a=!0,await i,await g(r)}}}function p(t){let e=E(t,{flags:"a"});return e.on("error",()=>{}),e}function g(t){return new Promise((e)=>{if(t.closed){e();return}t.once("close",()=>e()),t.end()})}async function w(t){let e=`${t}.1`;try{await f(t,e)}catch(n){if(J(n))return;await l(e).catch(()=>{}),await f(t,e).catch(()=>l(t).catch(()=>{}))}}
export{JMs,sIo};
