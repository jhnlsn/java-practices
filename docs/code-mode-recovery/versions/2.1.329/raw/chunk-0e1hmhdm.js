// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{x}from"/$bunfs/root/chunk-kg2zehkt.js";import{Y_e,KB}from"/$bunfs/root/chunk-f7fdz8jz.js";var e={disabled:"The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",missing:"The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."};function Yqr(n){return n?.seclogon==="disabled"||n?.seclogon==="missing"?e[n.seclogon]:void 0}async function Xqr(){if(x()!=="windows")return;let n=await Y_e({srtWin:KB()}).catch((o)=>{t(`[sandbox] could not read the sandbox status: ${d(o)}`,{level:"error"});return});return Yqr(n?.user)}
export{Yqr,Xqr};
