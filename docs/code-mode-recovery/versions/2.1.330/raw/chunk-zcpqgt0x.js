// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{readdir as s,stat as i}from"fs/promises";import{join as e}from"path";var Akt=".claude-plugin",Vp=e(Akt,"plugin.json"),zAe="plugin.json",kit=e(Akt,"marketplace.json"),QFn=["commands","skills","agents","hooks","themes","output-styles","monitors","workflows"],a=["SKILL.md",".mcp.json",".lsp.json"],OBt=[Akt,...QFn,...a];async function qin(n){return(await s(n)).filter((t)=>!r(t)).some(fhs)}async function ASr(n){let o=(await s(n,{withFileTypes:!0})).filter((t)=>!r(t.name));if(o.some((t)=>t.name===".claude-plugin"))return n;if(o.length===1&&o[0].isDirectory()){let t=e(n,o[0].name);if(await u(e(t,".claude-plugin")))return t;if(!fhs(o[0].name)&&await qin(t))return t}return n}function fhs(n){return OBt.includes(n)}function Hfl(n){return QFn.includes(n)}async function u(n){try{return await i(n),!0}catch{return!1}}function r(n){return n==="__MACOSX"||n===".DS_Store"}
export{Akt,Vp,zAe,kit,QFn,OBt,qin,ASr,fhs,Hfl};
