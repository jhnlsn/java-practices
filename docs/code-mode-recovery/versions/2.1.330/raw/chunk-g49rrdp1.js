// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p9,Zm,gvr,y4}from"/$bunfs/root/chunk-syr33dp2.js";import{pe}from"/$bunfs/root/chunk-18rsj2ts.js";import{randomBytes as l}from"crypto";function e9l(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return oFo(e?.content??"",t.data,e?.is_error===!0)}function oFo(o,t,e=!1,r=[]){return y4({envelope:{v:Zm,outcome:"completed",target:TSn(),is_error:e,content:gvr(o),output:t,...r.length>0&&{notes:r}},content:o})}function TSn(){return{name:p9(),working_dir:pe()}}
export{e9l,oFo,TSn};
