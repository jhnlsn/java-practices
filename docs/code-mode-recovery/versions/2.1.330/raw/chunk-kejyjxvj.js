// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{cs}from"/$bunfs/root/chunk-w578pjby.js";import{ee}from"/$bunfs/root/chunk-7cfjrnwy.js";var Uce=15728640,o=16384;function NNo(n,t){let e=0;while(e<n.length){let i=ee(n.slice(e),o);if(t-=Buffer.byteLength(cs(i))-2,t<0)break;e+=i.length}return n.slice(0,e)}
export{Uce,NNo};
