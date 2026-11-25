// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d,w}from"/$bunfs/root/chunk-avbzeyf3.js";import{t}from"/$bunfs/root/chunk-c2c9kwmh.js";var s=new Set(["EIO","ENOTTY","EBADF"]);function cE(e,n){if(!("setRawMode"in e)||typeof e.setRawMode!=="function")return;try{e.setRawMode(n)}catch(o){let a=d(o),r=w(o);if(a.includes("setRawMode failed")||s.has(r??"")){t(`setRawMode(${n}) failed on revoked tty: ${a}`);return}throw o}}
export{cE};
