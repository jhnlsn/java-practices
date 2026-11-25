// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{CCr}from"/$bunfs/root/chunk-8ttkntne.js";import{_u}from"/$bunfs/root/chunk-xfj2cwfv.js";import{V,ft}from"/$bunfs/root/chunk-w1d7ygsk.js";var d=V(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.getMachineId=void 0;var e=ft("process"),n=CCr(),c=_u();async function o(){let t="%windir%\\System32\\REG.exe";if(e.arch==="ia32"&&"PROCESSOR_ARCHITEW6432"in e.env)t="%windir%\\sysnative\\cmd.exe /c "+t;try{let i=(await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");if(i.length===2)return i[1].trim()}catch(r){c.diag.debug(`error reading machine id: ${r}`)}return}s.getMachineId=o});export default d();
