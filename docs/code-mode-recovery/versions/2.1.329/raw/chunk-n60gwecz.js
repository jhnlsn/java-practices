// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";var fEn="CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";function Lqr(){let{columns:r,rows:e}=process.stdout;if(!r||!e)return{};return{[fEn]:`${r}x${e}`}}function _Ma(){let r=s.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;if(delete process.env[fEn],r===void 0||!process.stdout.isTTY)return;let e=/^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);if(!e)return;process.stdout.columns||=Number(e[1]),process.stdout.rows||=Number(e[2])}
export{fEn,Lqr,_Ma};
