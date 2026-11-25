// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{FS,BTs,$To,UTo,BAr}from"/$bunfs/root/chunk-sps8tde9.js";function a(e){return e?.type==="MemberExpression"?!e.computed&&a(e.property):e?.type==="Identifier"?e.name==="Shader":e?.type==="Literal"&&e.value==="Shader"}function P$i(e){let s=[];return FS(e,({node:t})=>{if(t.type!=="CallExpression")return;let{callee:r}=t,[i,o]=t.arguments,n=r.type==="Identifier"&&r.name===UTo,p=a(r)?i:n&&a(i)?o:void 0;if(p?.type==="ObjectExpression"&&BTs(p))s.push($To(t,p))}),s.toSorted((t,r)=>r.at.start-t.at.start)}function myl(e){let s=new Set,t=[];for(let[r,{scanned:i}]of e.files)for(let o of P$i(i.program)){let n="problem"in o?o:BAr({spelled:o.spelled,file:r,root:e.root});if("module"in n)s.add(n.module);else{let p=n.problem.replace("Client","Shader").replace(/surface module's|\("\.\/board\.tsx"\)$/g,(l)=>l.startsWith("(")?'("./sky.ts")':"shader's");t.push(i.refuse(o.at,p).message)}}return{modules:[...s].sort(),problems:t}}
export{P$i,myl};
