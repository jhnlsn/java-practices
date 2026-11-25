// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ZJt,Yfi}from"/$bunfs/root/chunk-dn6qb495.js";import{D}from"/$bunfs/root/chunk-avbzeyf3.js";import{Ht}from"/$bunfs/root/chunk-aq3ms068.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{Y2e,bP}from"/$bunfs/root/chunk-0v6g5ynk.js";function xBr(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var MGs=()=>!1;var HGs=()=>bP()&&!Y2e()&&Ht("tengu_quiet_ember",MGs());var PBr={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:HGs,defaultEnabled:!1};function $Uo({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!xBr(e))return!1;try{return Yfi(e,o).length===0&&ZJt(PBr.name)}catch(n){return i(D(n)),!1}}
export{xBr,MGs,HGs,PBr,$Uo};
