// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Mt}from"/$bunfs/root/chunk-7cfjrnwy.js";import{Og}from"/$bunfs/root/chunk-kx2fp6pc.js";import{H6t}from"/$bunfs/root/chunk-xfj2cwfv.js";import{tg}from"/$bunfs/root/chunk-865at33z.js";var r_="MEMORY.md",QG=200,Wme=25000,JTs=4*Wme,Klt=200,rNe=4096;function qlt(t){let r=t.trim();return{trimmed:r,lineCount:Mt(r,`
`)+1,byteCount:r.length}}function LR(t){return t.normalize("NFC").toLowerCase()}function Qre(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((o)=>o.startsWith("."))?"":n}var DTt="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",QTs="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function Oj(t){let r="";for(let n of H6t(Og(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let o=n.codePointAt(0),e=o!==9&&o!==10&&(o<32||o>=127&&o<=159);r+=e?"\uFFFD":n}return r}function Rxe(t){return tg(s(t))}function QTo(t){return hfn(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function YAr(t){return Rxe(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var oVi=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function hfn(t){let r=t.codePointAt(0);if(oVi.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(hfn(n))continue;r+=n}return r}
export{r_,QG,Wme,JTs,Klt,rNe,qlt,LR,Qre,DTt,QTs,Oj,Rxe,QTo,YAr,oVi,hfn};
