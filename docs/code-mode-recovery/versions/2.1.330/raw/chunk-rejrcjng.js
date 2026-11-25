// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{uIl}from"/$bunfs/root/chunk-865at33z.js";import{mt}from"/$bunfs/root/chunk-qdcbcsg7.js";import{ian}from"/$bunfs/root/chunk-7625rswd.js";var r=4096;function uri(...n){for(let[e,o]of n.flatMap(Object.entries)){let t=fri(e,o);if(t!==void 0)for(let i of c(e,o).values().filter(s))mt().heldConnectorLimits.set(i,t)}}function fri(n,e){{let o=new Set([ian(Reflect.get(e,"orgMaxPermission")),...c(n,e).map((t)=>s(t)?mt().heldConnectorLimits.get(t):"blocked")]);return o.has("blocked")?"blocked":o.has("ask")?"ask":void 0}return}function s(n){let e=mt().heldConnectorLimits;return e.has(n)||e.size<r&&n.length<=r}function c(n,e){let o=Reflect.get(e,"url"),t=typeof o==="string"?URL.parse(o,"http://ccr")?.href:void 0,i=uIl(t??"");return[n.toLowerCase(),...t!==void 0&&i.length===0?[t]:i]}
export{uri,fri};
