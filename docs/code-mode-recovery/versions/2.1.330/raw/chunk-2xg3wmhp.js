// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Le}from"/$bunfs/root/chunk-0jve1fep.js";function ore(e,n){let t=e?.[n.argument],{entryKey:r}=n;if(r===void 0)return[{entry:void 0,value:t}];if(!Array.isArray(t))return[];let u=[];for(let[o,i]of t.entries())if(Le(i))u.push({entry:o,value:Object.hasOwn(i,r)?i[r]:void 0});return u}function _sn(e,n,t){let{entryKey:r}=n;if(r===void 0){let o=t.get(void 0);return o===void 0?{...e}:{...e,[n.argument]:o}}let u=e[n.argument];if(!Array.isArray(u))return{...e};return{...e,[n.argument]:u.map((o,i)=>{let s=t.get(i);return s===void 0||!Le(o)?o:{...o,[r]:s}})}}function jxi(e,n){let t=e[n.argument];if(n.entryKey===void 0||!Array.isArray(t))return{...e};return{...e,[n.argument]:t.map((r)=>Le(r)?{...r}:r)}}function hUt(e){return typeof e==="string"&&e.startsWith("sha256:")}function FNn(e,n){return e.wrongArgumentsHoldText===!0?typeof n==="string"&&/^sha256:[0-9a-f]{64}:/.test(n):hUt(n)}
export{ore,_sn,jxi,hUt,FNn};
