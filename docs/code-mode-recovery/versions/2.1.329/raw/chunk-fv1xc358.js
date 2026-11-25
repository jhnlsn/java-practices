// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{_}from"/$bunfs/root/chunk-c2c9kwmh.js";import{rt}from"/$bunfs/root/chunk-pwxp2pn6.js";import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{cu,O,c,U,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var t=1,f=65536,r=p(()=>cu().min(0).default(0)),m=p(()=>c({version:cu()})),n=p(()=>c({version:v(t),generation:cu().min(1),appliedBeforeFirstAsk:O(),outcome:U(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:O().default(!1),replacedForeign:r(),writtenAtMs:cu().min(0)}));function h5s(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function Dzr(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=rt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:u,...i}=a.data;return{ok:!0,ready:i}}
export{h5s,Dzr};
