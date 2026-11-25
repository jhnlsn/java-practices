// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{f1}from"/$bunfs/root/chunk-ht6e56zb.js";import{fkn}from"/$bunfs/root/chunk-jnrje35h.js";import{f1e}from"/$bunfs/root/chunk-hg1yqkjk.js";function t(e){if(!Array.isArray(e))return fkn(e);return e.some((r)=>fkn([r]))}function ZNe(e){if(t(e))return"seeded-comment";return(Array.isArray(e)?e.map(i):[e]).some((n)=>typeof n==="string"&&f1e(n))?"teammate-reply":void 0}function XUs(e){return ZNe(Array.isArray(e)?e.map((r)=>typeof r==="object"&&r!==null&&("text"in r)?{...r,text:o(r.text)}:r):o(e))}function o(e){return typeof e==="string"?e.replaceAll(`<\\${f1}`,`<${f1}`):e}function i(e){return typeof e==="object"&&e!==null&&"text"in e?e.text:void 0}
export{ZNe,XUs};
