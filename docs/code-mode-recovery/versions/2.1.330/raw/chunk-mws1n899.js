// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{k}from"/$bunfs/root/chunk-sng02qpc.js";import{Oe}from"/$bunfs/root/chunk-vs99e3g5.js";import{e}from"/$bunfs/root/chunk-a46xeenj.js";function uA(d){let r=k(5),{title:t,subtitle:o,children:l,onClose:c}=d,i;if(r[0]!==l||r[1]!==c||r[2]!==o||r[3]!==t)i=e(Oe,{title:t,subtitle:o,onCancel:c,escapeAction:"close",children:l}),r[0]=l,r[1]=c,r[2]=o,r[3]=t,r[4]=i;else i=r[4];return i}
export{uA};
