// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Nxs,Nv}from"/$bunfs/root/chunk-kgzzwvwc.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{Jp}from"/$bunfs/root/chunk-t39fw2cy.js";import{ce}from"/$bunfs/root/chunk-aq3ms068.js";import{Hfs,EE}from"/$bunfs/root/chunk-71qhfr8d.js";function ULn(){let r=!1;try{r=Jp()}catch(o){i(o)}try{return r&&Hfs()}catch(o){return i(o),!0}}function Mw(){if(!ULn())return!1;try{return EE()==="unanswered"}catch(r){return i(r),!0}}function jon(){try{ce().organizationAsk.hasHeld=!0}catch(r){i(r)}}function n0i(r){return"origin"in r&&r.origin==="server"}function $Ln(r){return(Nv()?.[r]??[]).filter(n0i)}function F5e(){return $Ln("PreToolUse").length>0}function Gon(){return Nxs()||F5e()}function wcl(){return Nxs()&&!F5e()}
export{ULn,Mw,jon,n0i,$Ln,F5e,Gon,wcl};
