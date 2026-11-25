// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{ds}from"/$bunfs/root/chunk-h485hv2e.js";import{c,zn,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var Gvn="Remote Control is off, so this session can\u2019t be sent",zvn="/send-to-project needs Remote Control so a Claude Project can read this session.",H6o="Turn on Remote Control and send",o=p(()=>c({})),e=p(()=>zn("choice",[c({choice:v("turn_on")}),c({choice:v("no")})])),w9s=ds({kind:"continue_in_projects_remote_control",payload:o,result:e,default:{choice:"no"},hideWhile:["panel","draft"]});
export{Gvn,zvn,H6o,w9s};
