// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{zh,Vge}from"/$bunfs/root/chunk-z6pfqf6e.js";import{ui}from"/$bunfs/root/chunk-rb36kwbn.js";import{Pjt}from"/$bunfs/root/chunk-6xae35jp.js";import{basename as l,dirname as t}from"path";function RSr(e){return`pr-${e}`}function Yin(e){return Pjt(e)}function xSr(e){return[Yin(e)]}function VAe(e){let r=Vge(e);return r===null?null:{checkout:r,home:Pjt(r)}}function u(e){let r=/\d+$/.exec(e)?.[0];return r!==void 0&&e===RSr(Number(r))}function n(e,r){for(let o=e;;o=t(o)){if(o===r||u(l(o))&&Vge(o)!==null)return!0;if(t(o)===o)return!1}}function Dfl(e){let r=ui(),o=r?.hookBased===!0&&u(r.worktreeName)?zh(r.worktreePath)??r.worktreePath:null;return n(zh(e)??e,o)||n(e,o)}
export{RSr,Yin,xSr,VAe,Dfl};
