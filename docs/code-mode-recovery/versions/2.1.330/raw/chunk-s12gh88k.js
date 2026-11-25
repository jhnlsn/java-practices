// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{se}from"/$bunfs/root/chunk-0rkwgmhx.js";import{fh,nA}from"/$bunfs/root/chunk-3t7ve0wy.js";import{h1i,e2e,U7,Fln}from"/$bunfs/root/chunk-ddfyyyy7.js";function K$n(){let n=fh();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function eys(){let n=h1i();return n&&!nA()?{session_id:n}:{}}var WFi=3600000;function uyo(){let n=se().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<WFi)return{};return{...K$n(),...eys()}}function fyo(){se().sessionHintsRefusedAt=Date.now()}var tys=["entrypoint","session_id","request_id"],u=new Set(tys);function pyo(n,s,i){let o=tys.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=U7(s);if(!e2e.test(e))return[];let r=o.filter((t)=>Fln(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&Fln(e,t))?[]:o}function Qwr(n){return n.includes("entrypoint")||n.includes("session_id")}function bgl(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{K$n,eys,WFi,uyo,fyo,tys,pyo,Qwr,bgl};
