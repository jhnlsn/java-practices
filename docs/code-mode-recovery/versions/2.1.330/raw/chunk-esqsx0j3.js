// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";var exn="CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";function OXr(){let{columns:e,rows:r}=process.stdout;if(!e||!r)return{};return{[exn]:`${e}x${r}`}}function BWa(){let e=s.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;if(s.unset(exn),e===void 0||!process.stdout.isTTY)return;let r=/^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(e);if(!r)return;process.stdout.columns||=Number(r[1]),process.stdout.rows||=Number(r[2])}
export{exn,OXr,BWa};
