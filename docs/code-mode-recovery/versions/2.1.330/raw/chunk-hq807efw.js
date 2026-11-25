// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{pf}from"/$bunfs/root/chunk-f9x2f6cx.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{yc}from"/$bunfs/root/chunk-ky5sghtd.js";function sLa(t){yc().xtversionName=t}function bDt(){return yc().xtversionName}function N$(){if(pf()?.isVscodeTerm)return!0;if(s.TERM_PROGRAM==="vscode")return!0;return yc().xtversionName?.startsWith("xterm.js")??!1}function r3o(){let t=yc().xtversionName?.toLowerCase();return t!==void 0&&(t.startsWith("iterm2")||t.startsWith("tmux "))}function lXt(){if(pf()?.isGhosttyXtv)return!0;return yc().xtversionName?.toLowerCase().startsWith("ghostty")??!1}
export{sLa,bDt,N$,r3o,lXt};
