// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_}from"/$bunfs/root/chunk-w578pjby.js";import{K8}from"/$bunfs/root/chunk-kx2fp6pc.js";import{Zq}from"/$bunfs/root/chunk-gq1dr8pm.js";import{trt}from"/$bunfs/root/chunk-bzyb60p0.js";import{eyr,Qst,tyr}from"/$bunfs/root/chunk-p3d6wgn7.js";import{Pe}from"/$bunfs/root/chunk-sghy0qej.js";var r=null;function lEn(n,o){if(n===Zq.kind||n===trt.kind)return!0;if(n===eyr)return o==="sdk_host";if(n===Qst)return o==="sdk_host";if(n===tyr)return o==="sdk_host";return o==="sdk_host"&&r!==null&&r.slackConnectDialogs.some((e)=>e.kind===n)}function dGr(n){return!lEn(n,"sdk_host")||lEn(n,"remote_control")}var s=/\u2028|\u2029/g,i="tengu_sober_inkwell";function t(){return Pe(i,{safe:!0})}function yVs(n){return _(n).replace(s,(o)=>o==="\u2028"?"\\u2028":"\\u2029")}function mY(n){if(t())return K8(_(n));return yVs(n)}function SVs(n,o){if(t())return K8(_(n,null,o));return _(n,null,o)}
export{yVs,mY,SVs,lEn,dGr};
