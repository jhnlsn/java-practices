// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ty}from"/$bunfs/root/chunk-f64qna2j.js";import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{ds}from"/$bunfs/root/chunk-h485hv2e.js";import{n,E,P,C,c,zn,F,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var rXt=200;function yCn(e,t){return e===null?"no messages yet":`active ${Ty(new Date(e),{now:t})}`}var o=p(()=>c({sends:F(["message","brief"]),newProjectName:n(),projects:C(c({id:n(),name:n(),lastMessageAtMs:E().nullable()})).max(rXt),truncated:P(),listError:n().optional()})),r=p(()=>zn("choice",[c({choice:v("new")}),c({choice:v("existing"),projectId:n()}),c({choice:v("cancel")})])),kQs=ds({kind:"continue_in_projects_target",payload:o,result:r,default:{choice:"cancel"},hideWhile:[]});
export{rXt,yCn,kQs};
