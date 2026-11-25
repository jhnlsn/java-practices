// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{q8}from"/$bunfs/root/chunk-7cfjrnwy.js";import{UC}from"/$bunfs/root/chunk-xfj2cwfv.js";import{cue}from"/$bunfs/root/chunk-r59sj93t.js";import{pht,Rk}from"/$bunfs/root/chunk-5h9h52az.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";var p="bot_protected_tengu_merry_rainbow";function PMt(){return Pe(p,{safe:!0})}function eqs(t,r){let e=pht(t,r);return r==="prompt"&&Rk(e)==="bash"&&PMt()?` ${e}`:e}function VJn(t){return!cue(UC(t).text,null)||!PMt()}function ETa(t){return VJn(t)?t:` ${t}`}function fht(t){let r=o(t);return/^\s/.test(r)&&r.trimStart().startsWith("/")&&PMt()}function o(t){return UC(t.replace(q8,"")).text}function n(t){return o(t).trim().toLowerCase()}function vTa(t,r){let e=n(r);return t?.find((i)=>n(i.label)===e)}
export{PMt,eqs,VJn,ETa,fht,vTa};
