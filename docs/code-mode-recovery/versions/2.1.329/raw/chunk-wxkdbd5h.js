// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{W5}from"/$bunfs/root/chunk-k266h4m8.js";import{ue}from"/$bunfs/root/chunk-ex299d27.js";import{fJ,NTe}from"/$bunfs/root/chunk-09zj247f.js";function nBe(){return ue()&&fJ()&&!W5()}function UVl(t){return nBe()&&NTe(t)}var E=750,l=3000;function $Vl(){return{debounceMs:E,maxWaitMs:l}}function BVl({news:t,subscribe:d,signal:o,settled:n,nothingToLingerFor:m,debounceMs:f,maxWaitMs:p}){return new Promise((c)=>{let r=!1,i,u,b=d(s);function e(){if(r)return;r=!0,clearTimeout(i),clearTimeout(u),b(),o.removeEventListener("abort",e),n?.removeEventListener("abort",a),c()}function a(){s()}function s(){if(r||t().length===0&&n?.aborted!==!0)return;if(n?.aborted===!0&&m?.()===!0){e();return}if(clearTimeout(i),i=setTimeout(e,f),u===void 0)u=setTimeout(e,p)}if(o.aborted){e();return}o.addEventListener("abort",e,{once:!0}),n?.addEventListener("abort",a,{once:!0}),s()})}
export{nBe,UVl,$Vl,BVl};
