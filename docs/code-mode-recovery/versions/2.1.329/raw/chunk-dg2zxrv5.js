// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{NWe}from"/$bunfs/root/chunk-2kq3kff0.js";import{S9e}from"/$bunfs/root/chunk-at5pesh5.js";import{$l}from"/$bunfs/root/chunk-0dbf4486.js";var a=(e)=>(t)=>class extends t{validateRegExpPattern(r){throw super.validateRegExpPattern(r),new S9e(r.source,r.flags)}readRegexp(){try{super.readRegexp()}catch(r){if(!(r instanceof S9e))throw r;let{source:o,flags:n}=r;this.finishToken(e,{pattern:o,flags:n,value:r})}}};var uBt=$l(()=>{let e=NWe(),t=e.Parser.extend(a(e.tokTypes.regexp));return{getLineInfo:e.getLineInfo,Parser:t,parse:(r,o)=>t.parse(r,o),tokTypes:e.tokTypes}});
export{uBt};
