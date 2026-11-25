// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ju}from"/$bunfs/root/chunk-kgzzwvwc.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{pc}from"/$bunfs/root/chunk-qgx0rrv2.js";function GTa(t){pc().xtversionName=t}function pOt(){return pc().xtversionName}function D1(){if(Ju()?.isVscodeTerm)return!0;if(s.TERM_PROGRAM==="vscode")return!0;return pc().xtversionName?.startsWith("xterm.js")??!1}function Pjo(){let t=pc().xtversionName?.toLowerCase();return t!==void 0&&(t.startsWith("iterm2")||t.startsWith("tmux "))}function n5t(){if(Ju()?.isGhosttyXtv)return!0;return pc().xtversionName?.toLowerCase().startsWith("ghostty")??!1}
export{GTa,pOt,D1,Pjo,n5t};
