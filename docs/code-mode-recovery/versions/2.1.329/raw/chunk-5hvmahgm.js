// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{posix as o}from"path";var sEe=".ccr-seed",hRa=501,jwn=o.join(sEe,"manifest.json"),S=o.join(sEe,"ready.json"),T=o.join(sEe,"laptop.json"),x=o.join(sEe,"worker.json"),pOe=o.join(sEe,"home","pack.json"),N5t=o.join(sEe,"home","ready.json");var f=o.join(sEe,"overlay.bundle"),s=256,i=500,_=4,c=2,l=1,r=_+c+l,e=200,E=2,A=Math.min(e,i-r-E-e),L=s-r,gRa=400;function LOt(n){let t=o.join("/",n.replaceAll("\\","/"));return t===`/${sEe}`||t.startsWith(`/${sEe}/`)}function mJn(n){return!n.split("/").some((t)=>t===""||t==="."||t==="..")}var R=/^\.\.namedfork$/i;function _Ra(n){return n.split("/").some((t)=>R.test(t))}
export{sEe,hRa,jwn,pOe,N5t,gRa,LOt,mJn,_Ra};
