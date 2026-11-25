// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{Me}from"/$bunfs/root/chunk-pwxp2pn6.js";var i=100,s=100;function J5t(o){let t=Me(o)?o:{},n=t.requestedSchema;return`mode=${t.mode==="url"?"url":"form"} fields=${c(Me(n)?n.properties:void 0)}`}function GOt(o,t){let{action:n}=t;return`action=${n==="accept"||n==="decline"||n==="cancel"?n:"other"} mode=${o} fields=${c(t.content)}`}function c(o){if(!Me(o))return"[]";let t=Object.keys(o),n=t.slice(0,i).map((r)=>r.length>s?`[name too long to show: ${r.length} characters]`:r),e=t.length-n.length;return e>0?`${_(n)} and ${e} more`:_(n)}
export{J5t,GOt};
