// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{km,eW}from"/$bunfs/root/chunk-zamn1mv0.js";import{jd,C1e,_ge,xee,Ik}from"/$bunfs/root/chunk-hg1yqkjk.js";function s(o,t){let c=km(),e=jd(o),n=xee(e,t),a=Ik(e,t),r=!(eW()&&!C1e(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:_ge(e,t)}}function Bra(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&FMs(t,n))return;t=n,o(n)},reset(){t=void 0}}}function FMs(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{Bra,FMs};
