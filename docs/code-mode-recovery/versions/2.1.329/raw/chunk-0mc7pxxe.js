// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{N}from"/$bunfs/root/chunk-kgzzwvwc.js";import{ee}from"/$bunfs/root/chunk-m55722gg.js";import{r6a}from"/$bunfs/root/chunk-g4jweshk.js";import{j}from"/$bunfs/root/chunk-z749tmkd.js";var n=4096,r=1024,i=new j(()=>new o);function L0(){return i.of(N().host)}function F7s(e,t){if(!e||!t)return;try{return btoa(`${e}:${t}`)}catch{return}}function s(){return r6a()!==void 0}class o{seen=new Set;off=!1;incomplete=!1;overflowNotice=null;record(e){if(this.recordingOff())return;if(typeof e!=="string"||e==="")return;let t=ee(e,r);if(this.seen.has(t))return;if(this.seen.size>=n){this.incomplete=!0,this.overflowNotice??=!0;return}this.seen.add(t)}recordingOff(){if(!this.off&&s())this.off=!0,this.seen.clear(),this.incomplete=!1,this.overflowNotice=null;return this.off}takeOverflowNotice(){if(this.overflowNotice===!0)return this.overflowNotice=!1,!0;return!1}snapshot(){return this.recordingOff(),{atoms:[...this.seen],complete:!this.incomplete}}}
export{L0,F7s};
