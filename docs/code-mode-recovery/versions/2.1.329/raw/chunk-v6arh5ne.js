// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{hNe,t4,kr}from"/$bunfs/root/chunk-avbzeyf3.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{i9i}from"/$bunfs/root/chunk-921fq3rt.js";function s2(e,r){let n=o(r);try{if(r instanceof Error){let t=i9i(r);if(t.length>0)e.stack=[`${e.name}: ${e.message}`,...t].join(`
`)}}catch{}i(t4(e,{telemetryMessage:e.telemetryMessage,...n!==void 0&&{code:n}}))}function o(e){try{return kr(e)}catch{return}}function J0(e){let r=hNe(e);if(r!=="a value that is not a built-in error")return r;try{return e instanceof Error?"an error of another class":"a value that is not an Error"}catch{return"a value whose class cannot be read"}}function Yse(e){return`${J0(e)}, error code ${o(e)??"none"}`}
export{s2,J0,Yse};
