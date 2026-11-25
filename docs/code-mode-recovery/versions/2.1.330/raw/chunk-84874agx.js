// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{kSe,F6}from"/$bunfs/root/chunk-vw137skj.js";var BYn={native:"copied to clipboard","tmux-buffer":"copied to tmux buffer",osc52:"sent to your terminal's clipboard",none:"not copied to clipboard"};async function vmt(e){let o=await F6(e);if(o)process.stdout.write(o);let t=kSe();return t==="osc52"&&!o?"none":t}
export{BYn,vmt};
