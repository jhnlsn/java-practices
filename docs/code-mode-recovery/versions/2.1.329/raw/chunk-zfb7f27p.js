// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";import{Ot,me}from"/$bunfs/root/chunk-aq3ms068.js";import{OB,htt,qD,wse}from"/$bunfs/root/chunk-g4jweshk.js";import{Wi}from"/$bunfs/root/chunk-ww5d16gt.js";var s0o="https://clau.de/chrome/permissions",m={install:OB,reconnect:htt,permissions:s0o};async function GWl({mcpClients:i,atStartup:a}){let l=await wse().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=me(),r=i.some((e)=>e.name===Wi&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:qD(),subscriber:Ot(),wsl:s.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await a(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{s0o,GWl};
