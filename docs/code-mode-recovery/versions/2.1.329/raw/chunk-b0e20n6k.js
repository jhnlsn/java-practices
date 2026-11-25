// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{X}from"/$bunfs/root/chunk-kgzzwvwc.js";import{OE}from"/$bunfs/root/chunk-0zgmgt5h.js";import{qM,YA,cy,Ot,OF,wn,au}from"/$bunfs/root/chunk-aq3ms068.js";function x1t(e){return e?`this session holds no gateway credential (${e})`:"this session holds no gateway credential"}function not(){return Ot()||n()}function n(){if(OE()!=="env-quad")return!1;try{return qM()&&OF()}catch{return!1}}function gDn(){return!Ot()&&n()}function Irn(){let{info:e,storeBearerOnly:t}=euo();if(!t||e===void 0)return e;return YA()==="store"?e:void 0}function euo(){let e=wn();if(e!==void 0)return{info:e,storeBearerOnly:!1};return gDn()?{info:au(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function P1t(e){let{info:t,storeBearerOnly:r}=euo();if(!r||t===void 0)return t;return await cy(e)==="store"?t:void 0}function $k(e){return X()?`This session could not reach Artifacts: ${e}`:`Not authenticated \u2014 run /login (${e})`}
export{x1t,not,gDn,Irn,euo,P1t,$k};
