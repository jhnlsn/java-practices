// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{ee}from"/$bunfs/root/chunk-m55722gg.js";import{Wke}from"/$bunfs/root/chunk-ksgy793t.js";import{Jv,vS}from"/$bunfs/root/chunk-wrjcstwp.js";var n=200,p="started by Claude";function U2s(e,{description:r,toolUseId:o,abortController:s}){let t=Wke(r,n)||p,a=ee(t,n),i=Jv("local_script"),l={...vS(i,"local_script",a.length<t.length?`${a}\u2026`:t,o),type:"local_script",status:"running",outputFile:"",abortController:s};return e.register(l),i}var S2l={async kill(e,r,o,s){let t=r.get(e);if(t?.type!=="local_script"||t.status!=="running")return;t.abortController?.abort(s)}};
export{U2s,S2l};
