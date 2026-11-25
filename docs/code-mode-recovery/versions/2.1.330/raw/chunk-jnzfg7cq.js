// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_}from"/$bunfs/root/chunk-w578pjby.js";import{Le}from"/$bunfs/root/chunk-0jve1fep.js";var i=100,s=100;function sJt(o){let t=Le(o)?o:{},n=t.requestedSchema;return`mode=${t.mode==="url"?"url":"form"} fields=${c(Le(n)?n.properties:void 0)}`}function r0t(o,t){let{action:n}=t;return`action=${n==="accept"||n==="decline"||n==="cancel"?n:"other"} mode=${o} fields=${c(t.content)}`}function c(o){if(!Le(o))return"[]";let t=Object.keys(o),n=t.slice(0,i).map((r)=>r.length>s?`[name too long to show: ${r.length} characters]`:r),e=t.length-n.length;return e>0?`${_(n)} and ${e} more`:_(n)}
export{sJt,r0t};
