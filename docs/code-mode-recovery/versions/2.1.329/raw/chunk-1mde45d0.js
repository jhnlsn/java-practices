// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ls}from"/$bunfs/root/chunk-vp9cgba2.js";import{n,O,c,Jn,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var mUo="What should the message say?";function hUo(e){return e.creates?`Sent as you to a new Claude Project, \u201C${e.projectName}\u201D, after you confirm it.`:`Sent as you to ${e.projectName}, after you confirm it.`}var o=p(()=>c({projectName:n(),creates:O()})),t=p(()=>Jn("choice",[c({choice:v("send"),message:n()}),c({choice:v("cancel")})])),uGs=ls({kind:"continue_in_projects_compose",payload:o,result:t,default:{choice:"cancel"},hideWhile:[]});
export{mUo,hUo,uGs};
