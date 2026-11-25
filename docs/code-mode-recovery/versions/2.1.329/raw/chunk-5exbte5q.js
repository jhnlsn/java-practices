// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ko,Se,On}from"/$bunfs/root/chunk-kgzzwvwc.js";import{Gxo,Qdt}from"/$bunfs/root/chunk-ca90c7br.js";import{b,Tln,pO}from"/$bunfs/root/chunk-aq3ms068.js";import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{ME}from"/$bunfs/root/chunk-pxy9yt8m.js";import{AOt}from"/$bunfs/root/chunk-7as43v19.js";import{homedir as o}from"os";function n(t){let r=Ko(),e=Tln(t);return!Qdt(r,o())&&Qdt(r,t)&&(e===null||Qdt(e.root,r))}function i(t){return[ME(t),Tln(t)?.root].find((r)=>!!r&&r!==t)}function qHl(t,r=!0){if(s.CLAUDE_CODE_SANDBOXED||!b("bot_protected_tengu_slate_orchard",!0))return;if(!r)return{path:t};let e=Gxo(t)??t;return AOt(t).verdict!=="untrusted"||pO(e)||n(e)?void 0:{path:e,repository:i(e)}}function x2o(t,r=!0){return Se()||On()?void 0:qHl(t,r)}
export{qHl,x2o};
