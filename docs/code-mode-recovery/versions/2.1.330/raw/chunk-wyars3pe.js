// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ne,Oi}from"/$bunfs/root/chunk-69qhefwa.js";import{jr}from"/$bunfs/root/chunk-w1d7ygsk.js";var Inr={};jr(Inr,{booleanOfInput:()=>hDt,default:()=>Inr,isHeldTrue:()=>V4o,numberInputHint:()=>Pnr,numberOfInput:()=>Onr});var hDt=(n)=>Ne(n)?!0:Oi(n)?!1:void 0;var V4o=(n)=>n===!0||n==="true";function Pnr(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function Onr(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{hDt,V4o,Pnr,Onr,Inr};
