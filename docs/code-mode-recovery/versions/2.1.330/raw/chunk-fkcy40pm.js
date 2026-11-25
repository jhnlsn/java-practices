// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{h$}from"/$bunfs/root/chunk-k449cc64.js";import{XAn}from"/$bunfs/root/chunk-5p1tkxex.js";import{LUe}from"/$bunfs/root/chunk-bzyb60p0.js";function t(e){if(!Array.isArray(e))return XAn(e);return e.some((r)=>XAn([r]))}function b$e(e){if(t(e))return"seeded-comment";return(Array.isArray(e)?e.map(i):[e]).some((n)=>typeof n==="string"&&LUe(n))?"teammate-reply":void 0}function aKs(e){return b$e(Array.isArray(e)?e.map((r)=>typeof r==="object"&&r!==null&&("text"in r)?{...r,text:o(r.text)}:r):o(e))}function o(e){return typeof e==="string"?e.replaceAll(`<\\${h$}`,`<${h$}`):e}function i(e){return typeof e==="object"&&e!==null&&"text"in e?e.text:void 0}
export{b$e,aKs};
