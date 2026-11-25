// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{gh,Q8}from"/$bunfs/root/chunk-f9x2f6cx.js";import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{vt}from"/$bunfs/root/chunk-2yx6c1y2.js";import{gt}from"/$bunfs/root/chunk-4vsz8a99.js";import{t_}from"/$bunfs/root/chunk-qrpds8jv.js";import{Fn}from"/$bunfs/root/chunk-pmryp5f3.js";import{mV}from"/$bunfs/root/chunk-nwk8fexj.js";import{Xre,Jre}from"/$bunfs/root/chunk-5nf47kr4.js";function Uht(o){return i()&&!Jre(mV)&&(o===void 0||l(o))}function i(){if(!t_())return!1;if(Xre()||gh())return!1;if(s.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=vt().skillOverrides?.[mV];if(o==="off"||o==="user-invocable-only")return!1;let e=Q8();if(e!==void 0&&!e.includes(mV))return!1;return!0}function l(o){return o.some((e)=>gt(e,Fn))}
export{Uht};
