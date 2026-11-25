// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{_}from"/$bunfs/root/chunk-w578pjby.js";import{et}from"/$bunfs/root/chunk-0jve1fep.js";import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{Zc,P,c,F,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var t=1,f=65536,r=p(()=>Zc().min(0).default(0)),m=p(()=>c({version:Zc()})),n=p(()=>c({version:v(t),generation:Zc().min(1),appliedBeforeFirstAsk:P(),outcome:F(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:P().default(!1),replacedForeign:r(),writtenAtMs:Zc().min(0)}));function Mei(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function O9r(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=et(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:u,...i}=a.data;return{ok:!0,ready:i}}
export{Mei,O9r};
