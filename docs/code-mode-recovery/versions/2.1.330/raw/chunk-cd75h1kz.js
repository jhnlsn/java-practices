// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_r}from"/$bunfs/root/chunk-cbnm4p23.js";import{au}from"/$bunfs/root/chunk-2567t09g.js";function Bo(r,m){let{signalB:n,timeoutMs:i,refTimer:u,timeoutError:s,fewListeners:b}=m??{},t=b?new AbortController:_r();if(r?.aborted||n?.aborted)return t.abort(),{signal:t.signal,cleanup:()=>{}};let e,o=()=>{if(e!==void 0)clearTimeout(e);t.abort()};if(i!==void 0){let a=Math.min(i,au);if(e=s?setTimeout((d)=>d.abort(new DOMException("The operation timed out.","TimeoutError")),a,t):setTimeout(o,a),!u)e.unref?.()}r?.addEventListener("abort",o),n?.addEventListener("abort",o);let l=()=>{if(e!==void 0)clearTimeout(e);r?.removeEventListener("abort",o),n?.removeEventListener("abort",o)};return{signal:t.signal,cleanup:l}}
export{Bo};
