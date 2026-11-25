// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{x}from"/$bunfs/root/chunk-kg2zehkt.js";import{lN}from"/$bunfs/root/chunk-rqs3939j.js";import{S_}from"/$bunfs/root/chunk-tsby2qjm.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";class s{closes=void 0}var l=new j(()=>new s);function ejr(e,n,{isSameLaunch:t}){}function tjr(){if(x()!=="windows"||!process.stdin.isTTY)return;try{process.stdin.setRawMode(!0),process.stdin.setRawMode(!1)}catch{}}function njr(e){{let n=(o)=>o.toUpperCase()===lN;for(let o of Object.keys(e).filter(n))delete e[o];let t=S_();for(let o of Object.keys(t).filter(n))e[o]=t[o]}}
export{ejr,tjr,njr};
