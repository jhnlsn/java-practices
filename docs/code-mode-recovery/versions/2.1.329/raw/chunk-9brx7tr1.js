// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{lSr}from"/$bunfs/root/chunk-3m8brr5g.js";import{Yc}from"/$bunfs/root/chunk-w03c3634.js";import{F,lt}from"/$bunfs/root/chunk-x3fg13na.js";var d=F(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.getMachineId=void 0;var e=lt("process"),n=lSr(),c=Yc();async function o(){let t="%windir%\\System32\\REG.exe";if(e.arch==="ia32"&&"PROCESSOR_ARCHITEW6432"in e.env)t="%windir%\\sysnative\\cmd.exe /c "+t;try{let i=(await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");if(i.length===2)return i[1].trim()}catch(r){c.diag.debug(`error reading machine id: ${r}`)}return}s.getMachineId=o});export default d();
