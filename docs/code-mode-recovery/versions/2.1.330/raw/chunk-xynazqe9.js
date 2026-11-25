// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
class qJ extends Error{timeoutMs;constructor(e,r){super(`${e} timed out after ${r}ms`);this.timeoutMs=r;this.name="BoundedTimeoutError"}}async function Hi(e,r,n){let t,o=new Promise((c,i)=>{t=setTimeout((s,u,m)=>s(new qJ(u,m)),Math.min(r,2147483647),i,n,r)});try{return await Promise.race([e,o])}finally{if(t)clearTimeout(t);e.catch(()=>{})}}var iUe=5000;function xy(e,r){return Hi(e,iUe,`[runner:stuck] fs op '${r}' (check TMPDIR mount health)`)}
export{qJ,Hi,iUe,xy};
