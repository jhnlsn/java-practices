// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import{rbe,rj}from"/$bunfs/root/chunk-ha393e1n.js";var e={disabled:"The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",missing:"The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."};function GXr(n){return n?.seclogon==="disabled"||n?.seclogon==="missing"?e[n.seclogon]:void 0}async function zXr(){if(x()!=="windows")return;let n=await rbe({srtWin:rj()}).catch((o)=>{t(`[sandbox] could not read the sandbox status: ${d(o)}`,{level:"error"});return});return GXr(n?.user)}
export{GXr,zXr};
