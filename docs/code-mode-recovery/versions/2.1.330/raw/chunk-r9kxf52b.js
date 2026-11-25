// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{de}from"/$bunfs/root/chunk-t57w17k7.js";class i{wait=null;beginLockHold=null}var t=new i;class o{untilDeadline=null;exitBeganAtMs=null}var n=de(new o,(e)=>{e.untilDeadline=null,e.exitBeganAtMs=null});function Cee(e=!0){n.untilDeadline=e&&n.untilDeadline!==!1}function KOs(){return n.untilDeadline===!0}function vVt(){let e=KOs();if(e)n.exitBeganAtMs??=Date.now();return e}function EYi(){let{exitBeganAtMs:e}=n;return e===null?0:Date.now()-e}function vYi(e,l){let r=t.wait;return t.wait=e,t.beginLockHold??=l??null,r}function TYi(){return t.beginLockHold?.()??(()=>{})}async function eRt(e){try{await t.wait?.(e)}catch{}}
export{Cee,KOs,vVt,EYi,vYi,TYi,eRt};
