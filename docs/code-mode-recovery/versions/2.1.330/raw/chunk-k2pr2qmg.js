// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{posix as o}from"path";var cTe=".ccr-seed",qNa=501,gAn=o.join(cTe,"manifest.json"),S=o.join(cTe,"ready.json"),T=o.join(cTe,"laptop.json"),x=o.join(cTe,"worker.json"),vMe=o.join(cTe,"home","pack.json"),HXt=o.join(cTe,"home","ready.json");var f=o.join(cTe,"overlay.bundle"),s=256,i=500,_=4,c=2,l=1,r=_+c+l,e=200,E=2,A=Math.min(e,i-r-E-e),L=s-r,YNa=400;function WDt(n){let t=o.join("/",n.replaceAll("\\","/"));return t===`/${cTe}`||t.startsWith(`/${cTe}/`)}function Nrr(n){return!n.split("/").some((t)=>t===""||t==="."||t==="..")}var R=/^\.\.namedfork$/i;function XNa(n){return n.split("/").some((t)=>R.test(t))}
export{cTe,qNa,gAn,vMe,HXt,YNa,WDt,Nrr,XNa};
