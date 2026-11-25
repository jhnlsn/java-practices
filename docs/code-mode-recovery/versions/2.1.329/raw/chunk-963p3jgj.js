// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ts}from"/$bunfs/root/chunk-c2c9kwmh.js";import{ee}from"/$bunfs/root/chunk-m55722gg.js";var ede=15728640,o=16384;function EPo(n,t){let e=0;while(e<n.length){let i=ee(n.slice(e),o);if(t-=Buffer.byteLength(ts(i))-2,t<0)break;e+=i.length}return n.slice(0,e)}
export{ede,EPo};
