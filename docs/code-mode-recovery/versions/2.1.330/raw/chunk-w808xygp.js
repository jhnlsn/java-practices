// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{arn,Zki}from"/$bunfs/root/chunk-7f901c6t.js";import{D}from"/$bunfs/root/chunk-jv7av99m.js";import{Lt}from"/$bunfs/root/chunk-865at33z.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{$6e,KA}from"/$bunfs/root/chunk-3t7ve0wy.js";function fKr(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var G9s=()=>!1;var z9s=()=>KA()&&!$6e()&&Lt("tengu_quiet_ember",G9s());var pKr={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:z9s,defaultEnabled:!1};function aVo({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!fKr(e))return!1;try{return Zki(e,o).length===0&&arn(pKr.name)}catch(n){return i(D(n)),!1}}
export{fKr,G9s,z9s,pKr,aVo};
