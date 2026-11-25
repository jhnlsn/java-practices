// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{StringDecoder as b}from"string_decoder";var h=65536;async function*ist(e,t){let l=Buffer.allocUnsafe(h),f=new b("utf8"),a=t?t.end-t.start:1/0,n=0,r=[];while(n<a){let{bytesRead:u}=await e.read(l,0,Math.min(l.length,a-n),t?t.start+n:null);if(u===0)break;n+=u;let i=f.write(l.subarray(0,u)),s=0;for(let o=i.indexOf(`
`);o!==-1;o=i.indexOf(`
`,s))r.push(i.slice(s,o)),yield d(r.join("")),r=[],s=o+1;if(s<i.length)r.push(i.slice(s))}let c=r.join("")+f.end();if(c.length>0)yield d(c);return n}function d(e){return e.endsWith("\r")?e.slice(0,-1):e}
export{ist};
