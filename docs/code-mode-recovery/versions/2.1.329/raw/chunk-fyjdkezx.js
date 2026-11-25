// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ls}from"/$bunfs/root/chunk-vp9cgba2.js";import{c,Jn,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var rSn="Remote Control is off, so this session can\u2019t be sent",oSn="/send-to-project needs Remote Control so a Claude Project can read this session.",gUo="Turn on Remote Control and send",o=p(()=>c({})),e=p(()=>Jn("choice",[c({choice:v("turn_on")}),c({choice:v("no")})])),fGs=ls({kind:"continue_in_projects_remote_control",payload:o,result:e,default:{choice:"no"},hideWhile:["panel","draft"]});
export{rSn,oSn,gUo,fGs};
