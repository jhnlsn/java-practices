// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{zd}from"/$bunfs/root/chunk-3b216adx.js";function IK(r){try{let t=r;if(t===null||typeof t!=="object"&&typeof t!=="function")return!1;for(let e=0;e<64;e++){if(zd(t))return!1;let o=Reflect.getPrototypeOf(t);if(o===null)return!1;if(o===Error.prototype)return!0;t=o}return!1}catch{return!1}}function nTi(r,t){try{return t.toStr(r)}catch{return t.errMsg(r)}}
export{IK,nTi};
