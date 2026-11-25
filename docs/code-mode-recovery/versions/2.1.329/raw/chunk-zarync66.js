// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{H,y,G}from"/$bunfs/root/chunk-6d7mp9j5.js";import{qe}from"/$bunfs/root/chunk-gn0dtfqq.js";G();var bQe="continue";function TTa(t,e,n){if(n&&e===bQe&&t===bQe+"/")return"/";if(e.startsWith("/")&&t.length===bQe.length+e.length+1&&t.startsWith(bQe+e))return t.slice(bQe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new qe(()=>new o);function i(){return l.of(N())}function pjo(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function CTa(){return i().inFlight}function y4s(t){i().inFlight=t}function ATa(){pjo(null),i().inFlight=null}function RTa(){let[t,e]=y(()=>i().lastResult);return H(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{bQe,TTa,pjo,CTa,y4s,ATa,RTa};
