// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{qNs,sE}from"/$bunfs/root/chunk-f9x2f6cx.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{cm}from"/$bunfs/root/chunk-xcgcdx61.js";import{ce}from"/$bunfs/root/chunk-865at33z.js";import{Cws,cv}from"/$bunfs/root/chunk-wj4me9k5.js";function oWn(){let r=!1;try{r=cm()}catch(o){i(o)}try{return r&&Cws()}catch(o){return i(o),!0}}function ok(){if(!oWn())return!1;try{return cv()==="unanswered"}catch(r){return i(r),!0}}function gcn(){try{ce().organizationAsk.hasHeld=!0}catch(r){i(r)}}function OWi(r){return"origin"in r&&r.origin==="server"}function sWn(r){return(sE()?.[r]??[]).filter(OWi)}function OYe(){return sWn("PreToolUse").length>0}function _cn(){return qNs()||OYe()}function skl(){return qNs()&&!OYe()}
export{oWn,ok,gcn,OWi,sWn,OYe,_cn,skl};
