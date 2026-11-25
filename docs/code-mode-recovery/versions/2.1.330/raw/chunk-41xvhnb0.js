// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{i}from"/$bunfs/root/chunk-k449cc64.js";import{gt}from"/$bunfs/root/chunk-4vsz8a99.js";import{Wi}from"/$bunfs/root/chunk-jsm9pvcb.js";function M8t(e){return Array.isArray(e?.names)&&e.names.length>0?{names:e.names,isWholeList:!1}:void 0}function bva(e,{tools:a,prefixesStillToCome:d,messages:f}){let s=e?.names.filter((o)=>!a.some((n)=>gt(n,o))&&!d.some((n)=>o.startsWith(n)));if(e===void 0||!s?.length)return e;let t=new Set;try{for(let o of f)if(o.type==="assistant"&&Array.isArray(o.message.content)){for(let n of o.message.content)if(Wi(n)&&n.type==="tool_use")t.add(n.name)}}catch(o){t.clear(),i(o)}let r=e.names.filter((o)=>!s.includes(o)||t.has(o));return r.length===e.names.length?e:M8t({...e,names:r})}
export{M8t,bva};
