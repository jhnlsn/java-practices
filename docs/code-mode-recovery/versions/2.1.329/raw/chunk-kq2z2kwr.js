// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Mt}from"/$bunfs/root/chunk-m55722gg.js";import{_y}from"/$bunfs/root/chunk-k936fbc4.js";import{ejt}from"/$bunfs/root/chunk-w03c3634.js";import{t_}from"/$bunfs/root/chunk-aq3ms068.js";var Dg="MEMORY.md",M2=200,Kfe=25000,s_s=4*Kfe,Pst=200,FHe=4096;function Ost(t){let r=t.trim();return{trimmed:r,lineCount:Mt(r,`
`)+1,byteCount:r.length}}function VA(t){return t.normalize("NFC").toLowerCase()}function lne(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((o)=>o.startsWith("."))?"":n}var Vwt="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",i_s="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function EW(t){let r="";for(let n of ejt(_y(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let o=n.codePointAt(0),e=o!==9&&o!==10&&(o<32||o>=127&&o<=159);r+=e?"\uFFFD":n}return r}function gAe(t){return t_(s(t))}function F_o(t){return Hin(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function xbr(t){return gAe(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var HFi=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Hin(t){let r=t.codePointAt(0);if(HFi.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Hin(n))continue;r+=n}return r}
export{Dg,M2,Kfe,s_s,Pst,FHe,Ost,VA,lne,Vwt,i_s,EW,gAe,F_o,xbr,HFi,Hin};
