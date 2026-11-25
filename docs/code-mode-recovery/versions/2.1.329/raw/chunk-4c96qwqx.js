// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{de}from"/$bunfs/root/chunk-pb0k2vmd.js";class i{wait=null;beginLockHold=null}var t=new i;class o{untilDeadline=null;exitBeganAtMs=null}var n=de(new o,(e)=>{e.untilDeadline=null,e.exitBeganAtMs=null});function UQ(e=!0){n.untilDeadline=e&&n.untilDeadline!==!1}function Lks(){return n.untilDeadline===!0}function Fjt(){let e=Lks();if(e)n.exitBeganAtMs??=Date.now();return e}function zGi(){let{exitBeganAtMs:e}=n;return e===null?0:Date.now()-e}function VGi(e,l){let r=t.wait;return t.wait=e,t.beginLockHold??=l??null,r}function KGi(){return t.beginLockHold?.()??(()=>{})}async function evt(e){try{await t.wait?.(e)}catch{}}
export{UQ,Lks,Fjt,zGi,VGi,KGi,evt};
