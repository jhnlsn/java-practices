// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{JE}from"/$bunfs/root/chunk-1cer6q9x.js";import{Tl}from"/$bunfs/root/chunk-wbk1hf21.js";function t(r){return"isApiErrorMessage"in r&&r.isApiErrorMessage===!0}function Dtr(r){return t(r)&&r.error==null&&r.api_error_status==null}function f3r(r){return r.is_api_error_message===!0||t(r)}function Eqe(r){return JE(Tl(r))}function p3r(r){return r.map((e)=>e.type==="text"&&("text"in e)&&typeof e.text==="string"?{...e,text:Eqe(e.text)}:e)}
export{Dtr,f3r,Eqe,p3r};
