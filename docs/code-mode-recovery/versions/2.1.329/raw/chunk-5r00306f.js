// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Ge}from"/$bunfs/root/chunk-2kad367j.js";import{osa,ssa,isa,Wre,bHr}from"/$bunfs/root/chunk-vp60tg8z.js";import{H,y,Pt,G}from"/$bunfs/root/chunk-6d7mp9j5.js";G();function Umn(t,i){let{credentials:r,storageV5:a}=Ge(),[e]=y(bHr),o=Pt(e.subscribe,e.getSnapshot),{view:n}=o,[c,C]=y(null),[g,u]=y(!1),[f,p]=y(!1),l=n.phase==="READY"&&!Wre(n.message);return H(()=>{if(l)p(!1)},[l,n]),H(()=>{let s=e.retainControl(t,{credentials:r,storageV5:a});return u(!0),s},[e,t,r,a]),{snapshot:g?o:{...o,isOpeningReadOut:!0},isLocked:c===n,isChoiceInDoubt:f&&o.subject!==t.key,choose(s,m){if(c===n)return!1;return C(n),p(!0),e.confirm({entryPoint:i,decision:s,recordVersion:n.record_version,epoch:n.epoch,shown:{presentation:isa[i],preselection:m},text:{id:osa,version_id:0,lang:ssa}})},tryAgain:()=>e.tryAgain()}}
export{Umn};
