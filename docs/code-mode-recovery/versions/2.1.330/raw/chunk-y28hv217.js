// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{t}from"/$bunfs/root/chunk-w578pjby.js";import{Rt,ge}from"/$bunfs/root/chunk-865at33z.js";import{NW,wot,sN,mae}from"/$bunfs/root/chunk-sjqze7qg.js";import{Xi}from"/$bunfs/root/chunk-prn6030k.js";var CUo="https://clau.de/chrome/permissions",m={install:NW,reconnect:wot,permissions:CUo};async function r8l({mcpClients:i,atStartup:a}){let l=await mae().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ge(),r=i.some((e)=>e.name===Xi&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:sN(),subscriber:Rt(),wsl:s.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await a(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{CUo,r8l};
