// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{it}from"/$bunfs/root/chunk-5ghdkswv.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{Me}from"/$bunfs/root/chunk-pwxp2pn6.js";var e="claudecode/editResult",l="1";function DOs(o,t){return o===it&&Me(t)&&t[e]===l}async function LOs(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return i(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}
export{DOs,LOs};
