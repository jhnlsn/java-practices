// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{$e}from"/$bunfs/root/chunk-cqahc80t.js";import{J9}from"/$bunfs/root/chunk-15zw23h1.js";var o=50;function Vft(){let i=$e(),e=[],u=0;return{publish(t,r,s){let n=s===void 0?{line:t,level:r}:{line:t,level:r,notice:s};if(u===0){e=[...e,n].slice(-o);return}i.emit(n)},takeBacklog(){let t=e;return e=[],t},subscribe(t){u+=1;let r=i.subscribe(t);return()=>{u-=1,r()}}}}var a=Buffer.from([0]);function ywn(i,{sessionUuid:e,boundDeviceUuid:u,issuedAtMs:t,fixed:r,strings:s}){if(s.some((n)=>n.includes("\x00")))throw Error("framedPreimage: NUL in a signed field");return Buffer.concat([i,a,J9(e),J9(u),g5s(t),...r,...s.flatMap((n)=>[Buffer.from(n,"utf8"),a])])}function g5s(i){let e=Buffer.alloc(8);return e.writeBigUInt64BE(BigInt(i)),e}
export{Vft,ywn,g5s};
