// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{X_}from"/$bunfs/root/chunk-r3zpj4t6.js";import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{ls}from"/$bunfs/root/chunk-vp9cgba2.js";import{n,E,O,C,c,Jn,U,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var J3t=200;function Obn(e,t){return e===null?"no messages yet":`active ${X_(new Date(e),{now:t})}`}var o=p(()=>c({sends:U(["message","brief"]),newProjectName:n(),projects:C(c({id:n(),name:n(),lastMessageAtMs:E().nullable()})).max(J3t),truncated:O(),listError:n().optional()})),r=p(()=>Jn("choice",[c({choice:v("new")}),c({choice:v("existing"),projectId:n()}),c({choice:v("cancel")})])),Qqs=ls({kind:"continue_in_projects_target",payload:o,result:r,default:{choice:"cancel"},hideWhile:[]});
export{J3t,Obn,Qqs};
