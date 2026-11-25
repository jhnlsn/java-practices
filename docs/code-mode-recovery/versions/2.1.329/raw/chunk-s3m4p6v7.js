// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{rE}from"/$bunfs/root/chunk-6bq219xw.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{Ch}from"/$bunfs/root/chunk-t39fw2cy.js";import{aWt,JA}from"/$bunfs/root/chunk-aq3ms068.js";import{zr,eMt}from"/$bunfs/root/chunk-hg1yqkjk.js";import{HV,fee,O7n,Lbn}from"/$bunfs/root/chunk-jwmq761f.js";import{rPe}from"/$bunfs/root/chunk-xxhzcgrd.js";var mHr="https://claude.ai/settings/data-privacy-controls";function hHr(){let e=eMt();return e===void 0?void 0:Ch(e)}async function s0l({credentials:e,storageV5:o}){if(!JA()||!aWt()||await O7n(e))return!1;let[r,n]=await Promise.all([HV(e),fee(e)]);if(!r.success)return!1;return Lbn(r.data,o,e),r.data.grove_enabled===null&&n.success&&!n.data.notice_is_grace_period}async function EWl(e){if(!await s0l(e))return;a("tengu_grove_print_viewed",{dismissable:!1});let o=hHr();rE(rPe()==="consentService"?`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You must run \`claude\` to review the updated terms.

`:`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You'll need to accept them at ${mHr}${o===void 0?"":` as ${o}`} to continue.

`),await zr(1)}
export{mHr,hHr,s0l,EWl};
