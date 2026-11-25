// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{kr}from"/$bunfs/root/chunk-f9x2f6cx.js";import{K}from"/$bunfs/root/chunk-5appeerh.js";import{j}from"/$bunfs/root/chunk-2904xtvq.js";async function OZ(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),K(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:a}]=await Promise.all([import("/$bunfs/root/chunk-5nyv269y.js"),import("/$bunfs/root/chunk-xt5b4m8b.js"),import("/$bunfs/root/chunk-s3nvydpc.js")]),i=e(),c=[r(),n(),a()];await Promise.race([Promise.all(c),K(500)]),await i}catch{}}class o{tasks=[]}var u=new j(()=>new o);function t(){return kr(u).tasks}function Pji(s){t().push(s.catch(()=>{}))}
export{OZ,Pji};
