// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{N}from"/$bunfs/root/chunk-f9x2f6cx.js";import{H,y,G}from"/$bunfs/root/chunk-bs4h6795.js";import{ze}from"/$bunfs/root/chunk-pzzqg6s3.js";G();var _tt="continue";function B0a(t,e,n){if(n&&e===_tt&&t===_tt+"/")return"/";if(e.startsWith("/")&&t.length===_tt.length+e.length+1&&t.startsWith(_tt+e))return t.slice(_tt.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new ze(()=>new o);function i(){return l.of(N())}function U4o(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function W0a(){return i().inFlight}function BQs(t){i().inFlight=t}function j0a(){U4o(null),i().inFlight=null}function G0a(){let[t,e]=y(()=>i().lastResult);return H(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{_tt,B0a,U4o,W0a,BQs,j0a,G0a};
