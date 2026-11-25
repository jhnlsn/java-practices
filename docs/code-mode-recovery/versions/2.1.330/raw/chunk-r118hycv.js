// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{om,i1}from"/$bunfs/root/chunk-2xjdqky3.js";import{Il,zTe,Sye,une,Vw}from"/$bunfs/root/chunk-bzyb60p0.js";function s(o,t){let c=om(),e=Il(o),n=une(e,t),a=Vw(e,t),r=!(i1()&&!zTe(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:Sye(e,t)}}function Ama(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&$Us(t,n))return;t=n,o(n)},reset(){t=void 0}}}function $Us(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{Ama,$Us};
