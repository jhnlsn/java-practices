// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{$E}from"/$bunfs/root/chunk-ndrgvsn7.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{dh}from"/$bunfs/root/chunk-xcgcdx61.js";import{Bzt,BR}from"/$bunfs/root/chunk-865at33z.js";import{Yr,uLt}from"/$bunfs/root/chunk-bzyb60p0.js";import{dq,Kte,gnr,ECn}from"/$bunfs/root/chunk-n7e3hgnx.js";import{gIe}from"/$bunfs/root/chunk-enp65fg7.js";var BUr="https://claude.ai/settings/data-privacy-controls";function WUr(){let e=uLt();return e===void 0?void 0:dh(e)}async function u2l({credentials:e,storageV5:o}){if(!BR()||!Bzt()||await gnr(e))return!1;let[r,n]=await Promise.all([dq(e),Kte(e)]);if(!r.success)return!1;return ECn(r.data,o,e),r.data.grove_enabled===null&&n.success&&!n.data.notice_is_grace_period}async function D9l(e){if(!await u2l(e))return;a("tengu_grove_print_viewed",{dismissable:!1});let o=WUr();$E(gIe()==="consentService"?`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You must run \`claude\` to review the updated terms.

`:`
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You'll need to accept them at ${BUr}${o===void 0?"":` as ${o}`} to continue.

`),await Yr(1)}
export{BUr,WUr,u2l,D9l};
