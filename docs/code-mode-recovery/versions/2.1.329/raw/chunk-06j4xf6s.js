// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{p}from"/$bunfs/root/chunk-3kmy2srk.js";import{jve,H9a}from"/$bunfs/root/chunk-m318qk27.js";import{CKs,Kjr}from"/$bunfs/root/chunk-djxanyrq.js";import{n,ae,C,c,v,W}from"/$bunfs/root/chunk-8s3h5g9z.js";W();var a=1,s=64,o="offer",t=p(()=>n().regex(jve).refine(H9a)),i=p(()=>c({v:v(a),head:t(),branch:n().min(1).max(CKs).refine(Kjr),ancestors:C(ae()).max(s).pipe(C(t()))}));function Boa(e){let r=i().safeParse(e[o]);return r.success?r.data:null}
export{Boa};
