// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{n,c,We,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var r=p(()=>We([c({v:v(1),state:n()}),c({v:v(2),engine:v("bridge")})]));function kpa(e,o){if(e===void 0||e===null)return typeof o==="object"&&o!==null?"none":"unstated";let t=r().safeParse(e);if(!t.success)return"unreadable";if(t.data.v===2)return"bridge";switch(t.data.state){case"connected":case"requested":case"detached":return t.data.state;default:return"other_state"}}function RVe(e){return e==="none"||e==="bridge"||e==="this_helper"}
export{kpa,RVe};
