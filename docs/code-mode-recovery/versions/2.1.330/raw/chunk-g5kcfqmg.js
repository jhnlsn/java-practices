// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{oe}from"/$bunfs/root/chunk-mgh1y10w.js";import{n3}from"/$bunfs/root/chunk-em52jhgp.js";function r(n){return oe(n)===0&&n3("a"+n)!=="a"}function _fo(n){if(n.length<2||n.charCodeAt(0)<=127)return n;let i=0;for(let e of n){if(!r(e))break;i+=e.length}if(i===0)return n;let o=i;while(o<n.length){let e=String.fromCodePoint(n.codePointAt(o));if(o+=e.length,oe(e)>0){if(o===n.length&&n.charCodeAt(i-1)===8205)return n;let t=n.slice(i,o)+n.slice(0,i)+n.slice(o);return oe(t)===oe(n)?t:n}}return n}
export{_fo};
