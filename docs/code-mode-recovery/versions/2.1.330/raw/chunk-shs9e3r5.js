// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{D1e,M3,Cr}from"/$bunfs/root/chunk-jv7av99m.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{qna}from"/$bunfs/root/chunk-7fsmgfxx.js";function kG(e,r){let n=o(r);try{if(r instanceof Error){let t=qna(r);if(t.length>0)e.stack=[`${e.name}: ${e.message}`,...t].join(`
`)}}catch{}i(M3(e,{telemetryMessage:e.telemetryMessage,...n!==void 0&&{code:n}}))}function o(e){try{return Cr(e)}catch{return}}function u0(e){let r=D1e(e);if(r!=="a value that is not a built-in error")return r;try{return e instanceof Error?"an error of another class":"a value that is not an Error"}catch{return"a value whose class cannot be read"}}function Wae(e){return`${u0(e)}, error code ${o(e)??"none"}`}
export{kG,u0,Wae};
