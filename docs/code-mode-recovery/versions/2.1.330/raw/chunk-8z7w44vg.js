// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ve}from"/$bunfs/root/chunk-3jkk3v3z.js";import{Jha,Qha,Zha,Ose,VUr}from"/$bunfs/root/chunk-pxzmvybx.js";import{H,y,Ot,G}from"/$bunfs/root/chunk-bs4h6795.js";G();function Tbn(t,i){let{credentials:r,storageV5:a}=Ve(),[e]=y(VUr),o=Ot(e.subscribe,e.getSnapshot),{view:n}=o,[c,C]=y(null),[g,u]=y(!1),[f,p]=y(!1),l=n.phase==="READY"&&!Ose(n.message);return H(()=>{if(l)p(!1)},[l,n]),H(()=>{let s=e.retainControl(t,{credentials:r,storageV5:a});return u(!0),s},[e,t,r,a]),{snapshot:g?o:{...o,isOpeningReadOut:!0},isLocked:c===n,isChoiceInDoubt:f&&o.subject!==t.key,choose(s,m){if(c===n)return!1;return C(n),p(!0),e.confirm({entryPoint:i,decision:s,recordVersion:n.record_version,epoch:n.epoch,shown:{presentation:Zha[i],preselection:m},text:{id:Jha,version_id:0,lang:Qha}})},tryAgain:()=>e.tryAgain()}}
export{Tbn};
