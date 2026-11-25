// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{f}from"/$bunfs/root/chunk-78g0060s.js";import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{Ke}from"/$bunfs/root/chunk-865at33z.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{To}from"/$bunfs/root/chunk-cqa9hrgx.js";async function NOt(o,r,n){try{await Promise.all([Ke((e)=>e.managedSettingsNoticeSeenOrg===o?e:{...e,managedSettingsNoticeSeenOrg:o},n),To("remote_managed_settings_login_notice",{surface:f(r)})])}catch(e){t(`managed settings notice: not recorded as shown: ${d(e)}`,{level:"error"})}}
export{NOt};
