// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{cD}from"/$bunfs/root/chunk-1gga1m1b.js";import{Ye}from"/$bunfs/root/chunk-x3fg13na.js";var n=Ye(cD()),e=typeof Buffer<"u"&&Buffer.from?function(r){return Buffer.from(r,"utf8")}:n.fromUtf8;function gFn(r){if(r instanceof Uint8Array)return r;if(typeof r==="string")return e(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT);return new Uint8Array(r)}function _Sr(r){if(typeof r==="string")return r.length===0;return r.byteLength===0}function HLi(r){return new Uint8Array([(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255])}function DLi(r){if(!Uint32Array.from){var t=new Uint32Array(r.length),f=0;while(f<r.length)t[f]=r[f],f+=1;return t}return Uint32Array.from(r)}export{gFn,_Sr,HLi,DLi};
