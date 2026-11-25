// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Y}from"/$bunfs/root/chunk-f9x2f6cx.js";import{gk}from"/$bunfs/root/chunk-9b4aq7fb.js";import{yM,$R,v_,Rt,L1,Sn,Dc}from"/$bunfs/root/chunk-865at33z.js";function djt(e){return e?`this session holds no gateway credential (${e})`:"this session holds no gateway credential"}function hat(){return Rt()||n()}function n(){if(gk()!=="env-quad")return!1;try{return yM()&&L1()}catch{return!1}}function CUn(){return!Rt()&&n()}function sdn(){let{info:e,storeBearerOnly:t}=ySo();if(!t||e===void 0)return e;return $R()==="store"?e:void 0}function ySo(){let e=Sn();if(e!==void 0)return{info:e,storeBearerOnly:!1};return CUn()?{info:Dc(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function cjt(e){let{info:t,storeBearerOnly:r}=ySo();if(!r||t===void 0)return t;return await v_(e)==="store"?t:void 0}function TE(e){return Y()?`This session could not reach Artifacts: ${e}`:`Not authenticated \u2014 run /login (${e})`}
export{djt,hat,CUn,sdn,ySo,cjt,TE};
