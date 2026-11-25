// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{I3,jm,o_r,qK}from"/$bunfs/root/chunk-a62n9qnb.js";import{pe}from"/$bunfs/root/chunk-ahqq8jsg.js";import{randomBytes as l}from"crypto";function $Bl(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return jPo(e?.content??"",t.data,e?.is_error===!0)}function jPo(o,t,e=!1,r=[]){return qK({envelope:{v:jm,outcome:"completed",target:Bpn(),is_error:e,content:o_r(o),output:t,...r.length>0&&{notes:r}},content:o})}function Bpn(){return{name:I3(),working_dir:pe()}}
export{$Bl,jPo,Bpn};
