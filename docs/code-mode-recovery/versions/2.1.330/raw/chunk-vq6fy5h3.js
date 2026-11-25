// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Be}from"/$bunfs/root/chunk-69qhefwa.js";import{FY}from"/$bunfs/root/chunk-tb222zty.js";var o=50;function Cgt(){let i=Be(),e=[],u=0;return{publish(t,r,s){let n=s===void 0?{line:t,level:r}:{line:t,level:r,notice:s};if(u===0){e=[...e,n].slice(-o);return}i.emit(n)},takeBacklog(){let t=e;return e=[],t},subscribe(t){u+=1;let r=i.subscribe(t);return()=>{u-=1,r()}}}}var a=Buffer.from([0]);function tAn(i,{sessionUuid:e,boundDeviceUuid:u,issuedAtMs:t,fixed:r,strings:s}){if(s.some((n)=>n.includes("\x00")))throw Error("framedPreimage: NUL in a signed field");return Buffer.concat([i,a,FY(e),FY(u),Hei(t),...r,...s.flatMap((n)=>[Buffer.from(n,"utf8"),a])])}function Hei(i){let e=Buffer.alloc(8);return e.writeBigUInt64BE(BigInt(i)),e}
export{Cgt,tAn,Hei};
