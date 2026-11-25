// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{p}from"/$bunfs/root/chunk-2cbgkbm2.js";import{Qfe,Grl}from"/$bunfs/root/chunk-6s9tac84.js";import{YXs,N4r}from"/$bunfs/root/chunk-s3mp6vdq.js";import{n,ie,C,c,v,B}from"/$bunfs/root/chunk-adx6804h.js";B();var a=1,s=64,o="offer",t=p(()=>n().regex(Qfe).refine(Grl)),i=p(()=>c({v:v(a),head:t(),branch:n().min(1).max(YXs).refine(N4r),ancestors:C(ie()).max(s).pipe(C(t()))}));function Uha(e){let r=i().safeParse(e[o]);return r.success?r.data:null}
export{Uha};
