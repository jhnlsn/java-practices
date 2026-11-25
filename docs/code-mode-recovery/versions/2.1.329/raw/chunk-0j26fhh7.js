// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{g_e,Sz}from"/$bunfs/root/chunk-cnnwpgh2.js";var _qn={native:"copied to clipboard","tmux-buffer":"copied to tmux buffer",osc52:"sent to your terminal's clipboard",none:"not copied to clipboard"};async function Xct(e){let o=await Sz(e);if(o)process.stdout.write(o);let t=g_e();return t==="osc52"&&!o?"none":t}
export{_qn,Xct};
