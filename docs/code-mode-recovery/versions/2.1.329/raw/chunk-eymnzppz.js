// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{yr}from"/$bunfs/root/chunk-avbzeyf3.js";import{gD,qs}from"/$bunfs/root/chunk-kgzzwvwc.js";function WJ(r){return typeof r==="string"?r:Array.isArray(r)&&r.length===1&&r[0]?.type==="text"?r[0].text:void 0}function nne(r){let{type:t,closesQuietTurn:o,message:e}=r;if(t!=="assistant"||o!==!0||typeof e!=="object"||e===null||!("content"in e)||!Array.isArray(e.content))return!1;let s=WJ(e.content);return s===""||s===gD}function B_(r){return r.type==="assistant"&&!r.isApiErrorMessage&&!nne(r)&&r.message.model===qs&&WJ(r.message.content)===gD}class vH extends yr{errorCode;constructor(r,t,o,e){super(r,t,e);this.errorCode=o}}
export{vH,WJ,nne,B_};
