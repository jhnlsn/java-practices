// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{ds}from"/$bunfs/root/chunk-h485hv2e.js";import{n,P,c,zn,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();function dCn(e,t){return t?`Create the project \u201C${e}\u201D and send this message?`:`Send this message to ${e}?`}var cCn="Choose Send again to confirm.",o=p(()=>c({projectName:n(),creates:P(),message:n()})),s=p(()=>zn("choice",[c({choice:v("send")}),c({choice:v("cancel")})])),BJs=ds({kind:"continue_in_projects_message",payload:o,result:s,default:{choice:"cancel"},hideWhile:[]});
export{dCn,cCn,BJs};
