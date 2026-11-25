// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{readdir as s,stat as i}from"fs/promises";import{join as e}from"path";var zyt=".claude-plugin",Ip=e(zyt,"plugin.json"),PTe="plugin.json",drt=e(zyt,"marketplace.json"),WMn=["commands","skills","agents","hooks","themes","output-styles","monitors","workflows"],a=["SKILL.md",".mcp.json",".lsp.json"],ZNt=[zyt,...WMn,...a];async function wtn(n){return(await s(n)).filter((t)=>!r(t)).some(Sis)}async function Sfr(n){let o=(await s(n,{withFileTypes:!0})).filter((t)=>!r(t.name));if(o.some((t)=>t.name===".claude-plugin"))return n;if(o.length===1&&o[0].isDirectory()){let t=e(n,o[0].name);if(await u(e(t,".claude-plugin")))return t;if(!Sis(o[0].name)&&await wtn(t))return t}return n}function Sis(n){return ZNt.includes(n)}function Gel(n){return WMn.includes(n)}async function u(n){try{return await i(n),!0}catch{return!1}}function r(n){return n==="__MACOSX"||n===".DS_Store"}
export{zyt,Ip,PTe,drt,WMn,ZNt,wtn,Sfr,Sis,Gel};
