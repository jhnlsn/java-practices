// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Ou,qA,B8,C3,Uft,yT,xg}from"/$bunfs/root/chunk-k449cc64.js";import{Th,Lf}from"/$bunfs/root/chunk-trwykz8a.js";import{sn}from"/$bunfs/root/chunk-hr2stdq7.js";var ein="next";function YQ(t,n,o){let s=!1,r;return n.update(t,(e)=>{if(r=e,e.notified)return e;if(s=!0,o?.skipStampIfRunning&&e.status==="running")return e;return{...e,notified:!0}}),{claimed:s,task:r}}var PAe=new RegExp(`^<${Ou}>\\n<${qA}>([^<]+)</${qA}>`+[B8,C3,Uft].map((t)=>`(?:\\n<${t}>[^<]*</${t}>)?`).join("")+`\\n<${yT}>`),g="It is being resumed automatically from its saved transcript, which may lack its last steps. It reports back to you in a notification when it is done, so do not start its task again unless the user asks for that.";function vdl(t){let n=t.indexOf(`</${xg}>`);return n>=0&&t.slice(0,n).endsWith(g)}function Ni({taskId:t,toolUseId:n,taskType:o,outputFile:s,status:r,summary:e,summaryLead:l,body:u,trailing:f}){let m=[[qA,t],[B8,n],[C3,o],[Uft,s],[yT,r],[xg,e]],a=`<${Ou}>`;for(let[i,T]of m)if(T)a+=`
${i===xg?l??"":""}<${i}>${T}</${i}>`;let c=(f??"").replaceAll(new RegExp(`<(?=\\s*/\\s*${Ou}\\b)`,"gi"),"&lt;"),d=`${a}${u??""}`,p=Lf(Th.filter((i)=>d.includes(sn(i))),d).trimEnd();return`${a}${p&&`
${p}`}${u??""}
</${Ou}>${c}`}
export{ein,YQ,PAe,vdl,Ni};
