// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Br}from"/$bunfs/root/chunk-kgzzwvwc.js";import{K}from"/$bunfs/root/chunk-q3pjyhpy.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";async function ene(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),K(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:a}]=await Promise.all([import("/$bunfs/root/chunk-n3whkd6e.js"),import("/$bunfs/root/chunk-d646vtkp.js"),import("/$bunfs/root/chunk-7dx4vtc6.js")]),i=e(),c=[r(),n(),a()];await Promise.race([Promise.all(c),K(500)]),await i}catch{}}class o{tasks=[]}var u=new j(()=>new o);function t(){return Br(u).tasks}function rHi(s){t().push(s.catch(()=>{}))}
export{ene,rHi};
