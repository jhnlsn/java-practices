// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{cn}from"/$bunfs/root/chunk-ephf358x.js";import{ht}from"/$bunfs/root/chunk-mzmcvr6c.js";import{wt}from"/$bunfs/root/chunk-k449cc64.js";import{ve}from"/$bunfs/root/chunk-zhr7rpv7.js";import{xa,Qf,pRs,Sn,BR,b}from"/$bunfs/root/chunk-865at33z.js";import{_B}from"/$bunfs/root/chunk-5rd4zsth.js";var o="tengu_toasty_zephyr";function uZe(){if(ve()!=="firstParty"||wt()||_B()||!BR()||xa().source!=="claude.ai"||!Qf()||!pRs())return null;let e=Sn(),n=ht(e?.accountUuid),t=ht(e?.organizationUuid);return n===null||t===null?null:{key:`${n}/${t}`,accountUuid:n,organizationUuid:t}}function h8n(){return xa().source==="claude.ai"&&!wt()&&!_B()&&!pRs()&&cn().PRIVACY_CONSENTS_SCOPE_REGISTERED}function gIe(){if(!b(o,!1))return"accountSettings";return uZe()===null?"claudeAi":"consentService"}
export{uZe,h8n,gIe};
