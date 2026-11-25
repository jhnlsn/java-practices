// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{d}from"/$bunfs/root/chunk-jv7av99m.js";import{nV,zae,G9e,n0e,rV,zpo}from"/$bunfs/root/chunk-p3d6wgn7.js";async function uHt(f,r){let[o,l]=await Promise.allSettled([rV(void 0,f,r),zpo(void 0,r)]),s=o.status==="rejected"?d(o.reason):null,i=o.status==="fulfilled"?o.value:[],a=l.status==="fulfilled"?l.value:[],t=[...i,...a],e=n0e(),u=e.ignoredUntrustedPool??null;if(e.id!==void 0&&zae(e.id)&&!t.some((n)=>nV(n)===e.id))t.push({kind:"self_hosted_pool",pool_id:e.id,name:e.id,created_at:"",alive_runner_count:0});if(t.length===0)return{availableTargets:[],selectedTarget:null,selectedTargetSource:null,environmentsError:s,ignoredUntrustedPool:u};let c=G9e(i,(n)=>n.kind!=="bridge")??a[0]??t[0],g=null;if(e.id!==void 0){let n=t.find((m)=>nV(m)===e.id);if(n)c=n,g=e.source??null}return{availableTargets:t,selectedTarget:c,selectedTargetSource:g,environmentsError:s,ignoredUntrustedPool:u}}
export{uHt};
