// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{lt}from"/$bunfs/root/chunk-rb36kwbn.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{Le}from"/$bunfs/root/chunk-0jve1fep.js";var e="claudecode/editResult",l="1";function x1s(o,t){return o===lt&&Le(t)&&t[e]===l}async function P1s(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return i(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}
export{x1s,P1s};
