// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{cn}from"/$bunfs/root/chunk-3q5b9bqc.js";import{pt}from"/$bunfs/root/chunk-5w3q3ks2.js";import{wt}from"/$bunfs/root/chunk-ht6e56zb.js";import{Ee}from"/$bunfs/root/chunk-cd3hqxcc.js";import{ba,Ff,mSs,wn,JA,b}from"/$bunfs/root/chunk-aq3ms068.js";import{c$}from"/$bunfs/root/chunk-6wzr4jy0.js";var o="tengu_toasty_zephyr";function _Xe(){if(Ee()!=="firstParty"||wt()||c$()||!JA()||ba().source!=="claude.ai"||!Ff()||!mSs())return null;let e=wn(),n=pt(e?.accountUuid),t=pt(e?.organizationUuid);return n===null||t===null?null:{key:`${n}/${t}`,accountUuid:n,organizationUuid:t}}function KVn(){return ba().source==="claude.ai"&&!wt()&&!c$()&&!mSs()&&cn().PRIVACY_CONSENTS_SCOPE_REGISTERED}function rPe(){if(!b(o,!1))return"accountSettings";return _Xe()===null?"claudeAi":"consentService"}
export{_Xe,KVn,rPe};
