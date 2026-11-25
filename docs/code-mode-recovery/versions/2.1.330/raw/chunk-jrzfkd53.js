// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{ht}from"/$bunfs/root/chunk-mzmcvr6c.js";var a=/^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/,c="0".repeat(32),i="0".repeat(16),u=8;function moi(n){if(typeof n!=="string")return!1;let t=a.exec(n);return t!==null&&t[1]!==c&&t[2]!==i}function jYr(n,{isCrossSession:t}){if(t||typeof n!=="object"||n===null)return;if(!("trace_context"in n)||!("uuid"in n))return;let r=n.trace_context,o=ht(n.uuid);if(!moi(r)||!o)return;return{traceparent:r,eventUuid:o}}function aUa(n){let t=n.findLast((e)=>e.traceContext)?.traceContext;if(!t)return{parent:void 0,linked:[]};let r=new Set([t.traceparent]),o=[];for(let{traceContext:e}of n)if(e&&!r.has(e.traceparent))r.add(e.traceparent),o.push(e);return{parent:t,linked:o.slice(-u)}}var d="anthropic/ccr-turn-event-uuid",s="anthropic/ccr-turn-linked-event-uuids";function lUa(n){let t=ht(n?.parent?.eventUuid);if(!n||!t)return{};let r=n.linked.flatMap((o)=>{let e=ht(o.eventUuid);return e?[e]:[]});return{[d]:t,...r.length>0&&{[s]:r}}}
export{moi,jYr,aUa,lUa};
