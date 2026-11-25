// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{d}from"/$bunfs/root/chunk-avbzeyf3.js";import{Mz,Qse,X4e,NMe,Hz,Pso}from"/$bunfs/root/chunk-mca8v9g1.js";async function fPt(f,r){let[o,l]=await Promise.allSettled([Hz(void 0,f,r),Pso(void 0,r)]),s=o.status==="rejected"?d(o.reason):null,i=o.status==="fulfilled"?o.value:[],a=l.status==="fulfilled"?l.value:[],t=[...i,...a],e=NMe(),u=e.ignoredUntrustedPool??null;if(e.id!==void 0&&Qse(e.id)&&!t.some((n)=>Mz(n)===e.id))t.push({kind:"self_hosted_pool",pool_id:e.id,name:e.id,created_at:"",alive_runner_count:0});if(t.length===0)return{availableTargets:[],selectedTarget:null,selectedTargetSource:null,environmentsError:s,ignoredUntrustedPool:u};let c=X4e(i,(n)=>n.kind!=="bridge")??a[0]??t[0],g=null;if(e.id!==void 0){let n=t.find((m)=>Mz(m)===e.id);if(n)c=n,g=e.source??null}return{availableTargets:t,selectedTarget:c,selectedTargetSource:g,environmentsError:s,ignoredUntrustedPool:u}}
export{fPt};
