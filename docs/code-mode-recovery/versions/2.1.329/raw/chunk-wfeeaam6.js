// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{br}from"/$bunfs/root/chunk-h0d9e7j8.js";import{Wc}from"/$bunfs/root/chunk-3tasjpr9.js";function Lo(r,m){let{signalB:n,timeoutMs:i,refTimer:u,timeoutError:s,fewListeners:b}=m??{},t=b?new AbortController:br();if(r?.aborted||n?.aborted)return t.abort(),{signal:t.signal,cleanup:()=>{}};let e,o=()=>{if(e!==void 0)clearTimeout(e);t.abort()};if(i!==void 0){let a=Math.min(i,Wc);if(e=s?setTimeout((d)=>d.abort(new DOMException("The operation timed out.","TimeoutError")),a,t):setTimeout(o,a),!u)e.unref?.()}r?.addEventListener("abort",o),n?.addEventListener("abort",o);let l=()=>{if(e!==void 0)clearTimeout(e);r?.removeEventListener("abort",o),n?.removeEventListener("abort",o)};return{signal:t.signal,cleanup:l}}
export{Lo};
