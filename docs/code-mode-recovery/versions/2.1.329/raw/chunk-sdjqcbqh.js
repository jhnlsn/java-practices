// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Oe,Os}from"/$bunfs/root/chunk-cqahc80t.js";import{Nr}from"/$bunfs/root/chunk-x3fg13na.js";var V7n={};Nr(V7n,{booleanOfInput:()=>lOt,default:()=>V7n,isHeldTrue:()=>Sjo,numberInputHint:()=>G7n,numberOfInput:()=>z7n});var lOt=(n)=>Oe(n)?!0:Os(n)?!1:void 0;var Sjo=(n)=>n===!0||n==="true";function G7n(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function z7n(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{lOt,Sjo,G7n,z7n,V7n};
