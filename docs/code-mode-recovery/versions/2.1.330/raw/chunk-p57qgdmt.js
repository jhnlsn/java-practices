// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{ds}from"/$bunfs/root/chunk-h485hv2e.js";import{n,P,c,zn,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var I6o="What should the message say?";function M6o(e){return e.creates?`Sent as you to a new Claude Project, \u201C${e.projectName}\u201D, after you confirm it.`:`Sent as you to ${e.projectName}, after you confirm it.`}var o=p(()=>c({projectName:n(),creates:P()})),t=p(()=>zn("choice",[c({choice:v("send"),message:n()}),c({choice:v("cancel")})])),b9s=ds({kind:"continue_in_projects_compose",payload:o,result:t,default:{choice:"cancel"},hideWhile:[]});
export{I6o,M6o,b9s};
