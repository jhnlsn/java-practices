// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{dS,Ygs,C_o,A_o,wbr}from"/$bunfs/root/chunk-2etam27z.js";function a(e){return e?.type==="MemberExpression"?!e.computed&&a(e.property):e?.type==="Identifier"?e.name==="Shader":e?.type==="Literal"&&e.value==="Shader"}function QPi(e){let s=[];return dS(e,({node:t})=>{if(t.type!=="CallExpression")return;let{callee:r}=t,[n,o]=t.arguments,i=r.type==="Identifier"&&r.name===A_o,p=a(r)?n:i&&a(n)?o:void 0;if(p?.type==="ObjectExpression"&&Ygs(p))s.push(C_o(t,p))}),s.toSorted((t,r)=>r.at.start-t.at.start)}function Eil(e){let s=new Set,t=[];for(let[r,{scanned:n}]of e.files)for(let o of QPi(n.program)){let i="problem"in o?o:wbr({spelled:o.spelled,file:r,root:e.root});if("module"in i)s.add(i.module);else{let p=i.problem.replace("Client","Shader").replace(/surface module's|\("\.\/board\.tsx"\)$/g,(m)=>m.startsWith("(")?'("./sky.ts")':"shader's");t.push(n.refuse(o.at,p).message)}}return{modules:[...s].sort(),problems:t}}
export{QPi,Eil};
