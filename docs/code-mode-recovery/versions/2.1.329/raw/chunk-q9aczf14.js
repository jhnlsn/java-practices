// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{Xu,lA,Z5,Yq,cdt,Dv,wg}from"/$bunfs/root/chunk-ht6e56zb.js";import{lh,Ef}from"/$bunfs/root/chunk-8t7qe51h.js";import{rn}from"/$bunfs/root/chunk-crdtetwv.js";var Ren="next";function tJ(t,n,o){let s=!1,r;return n.update(t,(e)=>{if(r=e,e.notified)return e;if(s=!0,o?.skipStampIfRunning&&e.status==="running")return e;return{...e,notified:!0}}),{claimed:s,task:r}}var hTe=new RegExp(`^<${Xu}>\\n<${lA}>([^<]+)</${lA}>`+[Z5,Yq,cdt].map((t)=>`(?:\\n<${t}>[^<]*</${t}>)?`).join("")+`\\n<${Dv}>`),g="It is being resumed automatically from its saved transcript, which may lack its last steps. It reports back to you in a notification when it is done, so do not start its task again unless the user asks for that.";function DJa(t){let n=t.indexOf(`</${wg}>`);return n>=0&&t.slice(0,n).endsWith(g)}function xi({taskId:t,toolUseId:n,taskType:o,outputFile:s,status:r,summary:e,summaryLead:l,body:u,trailing:f}){let m=[[lA,t],[Z5,n],[Yq,o],[cdt,s],[Dv,r],[wg,e]],a=`<${Xu}>`;for(let[i,T]of m)if(T)a+=`
${i===wg?l??"":""}<${i}>${T}</${i}>`;let c=(f??"").replaceAll(new RegExp(`<(?=\\s*/\\s*${Xu}\\b)`,"gi"),"&lt;"),d=`${a}${u??""}`,p=Ef(lh.filter((i)=>d.includes(rn(i))),d).trimEnd();return`${a}${p&&`
${p}`}${u??""}
</${Xu}>${c}`}
export{Ren,tJ,hTe,DJa,xi};
