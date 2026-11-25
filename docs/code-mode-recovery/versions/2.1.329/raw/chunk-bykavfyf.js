// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{pt}from"/$bunfs/root/chunk-5w3q3ks2.js";var a=/^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/,c="0".repeat(32),i="0".repeat(16),u=8;function aYs(n){if(typeof n!=="string")return!1;let t=a.exec(n);return t!==null&&t[1]!==c&&t[2]!==i}function OVr(n,{isCrossSession:t}){if(t||typeof n!=="object"||n===null)return;if(!("trace_context"in n)||!("uuid"in n))return;let r=n.trace_context,o=pt(n.uuid);if(!aYs(r)||!o)return;return{traceparent:r,eventUuid:o}}function EPa(n){let t=n.findLast((e)=>e.traceContext)?.traceContext;if(!t)return{parent:void 0,linked:[]};let r=new Set([t.traceparent]),o=[];for(let{traceContext:e}of n)if(e&&!r.has(e.traceparent))r.add(e.traceparent),o.push(e);return{parent:t,linked:o.slice(-u)}}var d="anthropic/ccr-turn-event-uuid",s="anthropic/ccr-turn-linked-event-uuids";function vPa(n){let t=pt(n?.parent?.eventUuid);if(!n||!t)return{};let r=n.linked.flatMap((o)=>{let e=pt(o.eventUuid);return e?[e]:[]});return{[d]:t,...r.length>0&&{[s]:r}}}
export{aYs,OVr,EPa,vPa};
