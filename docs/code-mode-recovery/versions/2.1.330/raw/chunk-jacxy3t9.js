// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{CCr}from"/$bunfs/root/chunk-8ttkntne.js";import{_u}from"/$bunfs/root/chunk-xfj2cwfv.js";import{V,ft}from"/$bunfs/root/chunk-w1d7ygsk.js";var u=V(function(n){Object.defineProperty(n,"__esModule",{value:!0});n.getMachineId=void 0;var r=ft("fs"),i=CCr(),t=_u();async function c(){try{return(await r.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}try{return(await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}return}n.getMachineId=c});export default u();
