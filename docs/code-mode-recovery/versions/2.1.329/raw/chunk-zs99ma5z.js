// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{lSr}from"/$bunfs/root/chunk-3m8brr5g.js";import{Yc}from"/$bunfs/root/chunk-w03c3634.js";import{F,lt}from"/$bunfs/root/chunk-x3fg13na.js";var u=F(function(n){Object.defineProperty(n,"__esModule",{value:!0});n.getMachineId=void 0;var r=lt("fs"),i=lSr(),t=Yc();async function c(){try{return(await r.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}try{return(await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}return}n.getMachineId=c});export default u();
