// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{mE}from"/$bunfs/root/chunk-fdj6j0gb.js";import{ml}from"/$bunfs/root/chunk-74jsynkt.js";function t(r){return"isApiErrorMessage"in r&&r.isApiErrorMessage===!0}function QYn(r){return t(r)&&r.error==null&&r.api_error_status==null}function _2r(r){return r.is_api_error_message===!0||t(r)}function A6e(r){return mE(ml(r))}function y2r(r){return r.map((e)=>e.type==="text"&&("text"in e)&&typeof e.text==="string"?{...e,text:A6e(e.text)}:e)}
export{QYn,_2r,A6e,y2r};
