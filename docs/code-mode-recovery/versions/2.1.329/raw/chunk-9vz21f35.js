// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{o9}from"/$bunfs/root/chunk-k936fbc4.js";import{CK}from"/$bunfs/root/chunk-76t3g1yn.js";import{eet}from"/$bunfs/root/chunk-hg1yqkjk.js";import{qcr,Nnt,Ycr}from"/$bunfs/root/chunk-mca8v9g1.js";import{Ie}from"/$bunfs/root/chunk-b03afx74.js";var r=null;function w_n(n,o){if(n===CK.kind||n===eet.kind)return!0;if(n===qcr)return o==="sdk_host";if(n===Nnt)return o==="sdk_host";if(n===Ycr)return o==="sdk_host";return o==="sdk_host"&&r!==null&&r.slackConnectDialogs.some((e)=>e.kind===n)}function HFr(n){return!w_n(n,"sdk_host")||w_n(n,"remote_control")}var s=/\u2028|\u2029/g,i="tengu_sober_inkwell";function t(){return Ie(i,{safe:!0})}function dUs(n){return _(n).replace(s,(o)=>o==="\u2028"?"\\u2028":"\\u2029")}function T9(n){if(t())return o9(_(n));return dUs(n)}function cUs(n,o){if(t())return o9(_(n,null,o));return _(n,null,o)}
export{dUs,T9,cUs,w_n,HFr};
