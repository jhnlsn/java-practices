// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{oe}from"/$bunfs/root/chunk-chsxmm1h.js";import{Jm,cx}from"/$bunfs/root/chunk-0v6g5ynk.js";import{Lxi,SBe,oY,frn}from"/$bunfs/root/chunk-sh0rtjsq.js";function LHn(){let n=Jm();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function lds(){let n=Lxi();return n&&!cx()?{session_id:n}:{}}var Sxi=3600000;function tco(){let n=oe().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<Sxi)return{};return{...LHn(),...lds()}}function nco(){oe().sessionHintsRefusedAt=Date.now()}var dds=["entrypoint","session_id","request_id"],u=new Set(dds);function rco(n,s,i){let o=dds.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=oY(s);if(!SBe.test(e))return[];let r=o.filter((t)=>frn(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&frn(e,t))?[]:o}function Kmr(n){return n.includes("entrypoint")||n.includes("session_id")}function Vol(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{LHn,lds,Sxi,tco,nco,dds,rco,Kmr,Vol};
