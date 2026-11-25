// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{A}from"/$bunfs/root/chunk-jv7av99m.js";import{uD}from"/$bunfs/root/chunk-r8478wtb.js";import{T}from"/$bunfs/root/chunk-ma3kja9f.js";function Md(t,e){let o=typeof e==="object"&&e!==null&&"action"in e?String(e.action):typeof e==="object"&&e!==null?Object.keys(e).slice(0,3).join(","):String(e);throw new A(`Artifact ${t}: no arm for ${o} (routing table and handler disagree)`,"Artifact action routing table and handler disagree")}var r=500,OPa=4000;function jD(t,e=r){let o=Array.isArray(t)?t.slice(0,e):[],n=o.filter(T);return{rows:n,unreadable:o.length-n.length,pastCap:Array.isArray(t)?t.length-o.length:0}}function bY(t,e){return uD(typeof t==="string"?t:typeof t==="number"||typeof t==="boolean"?String(t):"",e)}
export{Md,OPa,jD,bY};
