// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{A}from"/$bunfs/root/chunk-avbzeyf3.js";import{n0}from"/$bunfs/root/chunk-e9fhcxkx.js";import{T}from"/$bunfs/root/chunk-rhrgztck.js";function hd(t,e){let o=typeof e==="object"&&e!==null&&"action"in e?String(e.action):typeof e==="object"&&e!==null?Object.keys(e).slice(0,3).join(","):String(e);throw new A(`Artifact ${t}: no arm for ${o} (routing table and handler disagree)`,"Artifact action routing table and handler disagree")}var r=500,PSa=4000;function HD(t,e=r){let o=Array.isArray(t)?t.slice(0,e):[],n=o.filter(T);return{rows:n,unreadable:o.length-n.length,pastCap:Array.isArray(t)?t.length-o.length:0}}function P9(t,e){return n0(typeof t==="string"?t:typeof t==="number"||typeof t==="boolean"?String(t):"",e)}
export{hd,PSa,HD,P9};
