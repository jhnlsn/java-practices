// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{At,HE}from"/$bunfs/root/chunk-pxy9yt8m.js";import{ko,yUn,dO,QSe,vkt,Dd}from"/$bunfs/root/chunk-aq3ms068.js";function MGr(){let e=HE("model"),t=e==="policySettings"||e==="flagSettings"?At().model:vkt()?.model??At().model,i=s.ANTHROPIC_MODEL||t||QSe()||void 0;return i&&P4s(i,"persisted")||Dd()}function P4s(e,t){if(!ko(e))return dO(e)??void 0;return yUn(e,t)?void 0:e}
export{MGr,P4s};
