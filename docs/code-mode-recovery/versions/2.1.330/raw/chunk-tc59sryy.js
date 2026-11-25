// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{M8}from"/$bunfs/root/chunk-42tcgre6.js";import{ue}from"/$bunfs/root/chunk-r3kja8v6.js";import{cZ,oRe}from"/$bunfs/root/chunk-w50zedgp.js";function Wje(){return ue()&&cZ()&&!M8()}function xZl(t){return Wje()&&oRe(t)}var E=750,l=3000;function PZl(){return{debounceMs:E,maxWaitMs:l}}function OZl({news:t,subscribe:d,signal:o,settled:n,nothingToLingerFor:m,debounceMs:f,maxWaitMs:p}){return new Promise((c)=>{let r=!1,i,u,b=d(s);function e(){if(r)return;r=!0,clearTimeout(i),clearTimeout(u),b(),o.removeEventListener("abort",e),n?.removeEventListener("abort",a),c()}function a(){s()}function s(){if(r||t().length===0&&n?.aborted!==!0)return;if(n?.aborted===!0&&m?.()===!0){e();return}if(clearTimeout(i),i=setTimeout(e,f),u===void 0)u=setTimeout(e,p)}if(o.aborted){e();return}o.addEventListener("abort",e,{once:!0}),n?.addEventListener("abort",a,{once:!0}),s()})}
export{Wje,xZl,PZl,OZl};
