// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Oo,Se,Hn}from"/$bunfs/root/chunk-f9x2f6cx.js";import{sNo,Rpt}from"/$bunfs/root/chunk-z6pfqf6e.js";import{b,dmn,Xk}from"/$bunfs/root/chunk-865at33z.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{wv}from"/$bunfs/root/chunk-2yx6c1y2.js";import{FDt}from"/$bunfs/root/chunk-e1gwyq1j.js";import{homedir as o}from"os";function n(t){let r=Oo(),e=dmn(t);return!Rpt(r,o())&&Rpt(r,t)&&(e===null||Rpt(e.root,r))}function i(t){return[wv(t),dmn(t)?.root].find((r)=>!!r&&r!==t)}function szl(t,r=!0){if(s.CLAUDE_CODE_SANDBOXED||!b("bot_protected_tengu_slate_orchard",!0))return;if(!r)return{path:t};let e=sNo(t)??t;return FDt(t).verdict!=="untrusted"||Xk(e)||n(e)?void 0:{path:e,repository:i(e)}}function Q3o(t,r=!0){return Se()||Hn()?void 0:szl(t,r)}
export{szl,Q3o};
