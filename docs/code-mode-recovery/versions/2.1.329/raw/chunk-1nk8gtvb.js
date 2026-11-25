// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{oa}from"/$bunfs/root/chunk-dt01kn47.js";import{sZe}from"/$bunfs/root/chunk-regemcqy.js";import{hB}from"/$bunfs/root/chunk-tf68f3sb.js";function JOt(o){return o==="cache_miss"||o==="route_missing"?"policy_unread":"policy_denied"}function SOa(o){try{let e=oa(sZe);return e===null||JOt(e)==="policy_unread"&&!o}catch{return!1}}function bOa(o,e){let n=oa(o);if(n!==null)return JOt(n);return e()?"uploads_off":hB()}
export{JOt,SOa,bOa};
