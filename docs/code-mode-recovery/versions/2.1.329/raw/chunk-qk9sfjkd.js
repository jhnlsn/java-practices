// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ls}from"/$bunfs/root/chunk-vp9cgba2.js";import{n,O,c,Jn,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();function kbn(e,t){return t?`Create the project \u201C${e}\u201D and send this message?`:`Send this message to ${e}?`}var Ebn="Choose Send again to confirm.",o=p(()=>c({projectName:n(),creates:O(),message:n()})),s=p(()=>Jn("choice",[c({choice:v("send")}),c({choice:v("cancel")})])),hqs=ls({kind:"continue_in_projects_message",payload:o,result:s,default:{choice:"cancel"},hideWhile:[]});
export{kbn,Ebn,hqs};
