// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{K}from"/$bunfs/root/chunk-q3pjyhpy.js";function Sc(){if(typeof setImmediate==="function")return new Promise((e)=>setImmediate(e));if(typeof MessageChannel==="function")return new Promise((e)=>{let n=new MessageChannel;n.port1.onmessage=()=>{n.port1.close(),e()},n.port2.postMessage(null)});return K(0)}
export{Sc};
