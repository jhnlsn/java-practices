// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_,te}from"/$bunfs/root/chunk-w578pjby.js";var Zrn=0,Wdo=1,Chr=262144,n=5,Ahr=1048576,ust=1e4;function Rhr(r){let e=typeof r==="string"?Buffer.from(r,"utf8"):r,t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(Zrn,4),e.copy(t,n),t}function H5(r){let e=Buffer.from(_(r),"utf8"),t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(Wdo,4),e.copy(t,n),t}function jdo(r,e){let t=Buffer.alloc(0),o=!1;return(l)=>{if(o)return;t=t.length===0?l:Buffer.concat([t,l]);while(t.length>=n){let f=t.readUInt32BE(0);if(f>Ahr){o=!0,e(`frame too large (${f} > ${Ahr})`);return}let u=n+f;if(t.length<u)return;let i=t.readUInt8(4),s=t.subarray(n,u);if(t=t.subarray(u),i===Zrn)r({kind:Zrn,payload:Buffer.from(s)});else if(i===Wdo){let c;try{c=te(s.toString("utf8"))}catch{o=!0,e("bad ctrl json");return}r({kind:Wdo,ctrl:c})}else{o=!0,e(`unknown frame kind ${i}`);return}}}}
export{Zrn,Wdo,Chr,Ahr,ust,Rhr,H5,jdo};
