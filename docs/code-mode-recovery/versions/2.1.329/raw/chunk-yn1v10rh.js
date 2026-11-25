// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Tg,mNe}from"/$bunfs/root/chunk-ca90c7br.js";import{Pa}from"/$bunfs/root/chunk-5ghdkswv.js";import{Mgr}from"/$bunfs/root/chunk-02e936rh.js";import{basename as l,dirname as t}from"path";function bfr(e){return`pr-${e}`}function jMn(e){return Mgr(e)}function wfr(e){return[jMn(e)]}function OTe(e){let r=mNe(e);return r===null?null:{checkout:r,home:Mgr(r)}}function u(e){let r=/\d+$/.exec(e)?.[0];return r!==void 0&&e===bfr(Number(r))}function n(e,r){for(let o=e;;o=t(o)){if(o===r||u(l(o))&&mNe(o)!==null)return!0;if(t(o)===o)return!1}}function zel(e){let r=Pa(),o=r?.hookBased===!0&&u(r.worktreeName)?Tg(r.worktreePath)??r.worktreePath:null;return n(Tg(e)??e,o)||n(e,o)}
export{bfr,jMn,wfr,OTe,zel};
