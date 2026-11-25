// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{I}from"/$bunfs/root/chunk-m55722gg.js";import{Hke}from"/$bunfs/root/chunk-a1rcy6x2.js";import{Lt}from"/$bunfs/root/chunk-tyy049k4.js";import{an}from"/$bunfs/root/chunk-nqp6a09z.js";var Vya=(t)=>`${t.path} (${an(t.bytes)})`;var $2s=(t,r)=>[t].filter((e)=>e>0).map((e)=>`and ${e} more ${I(e,r)} not named here`);var J1o=(t)=>(/^ */.exec(t)?.[0]??"")+Lt(t,Hke);var B2s=(t)=>[t].filter((r)=>r>0).map((r)=>`${r} ${I(r,"entry stays","entries stay")} on this machine (secrets, links, ignored files)`);var W2s=(t)=>[t??[]].flat().flatMap((r)=>[`Writes this manifest first, to ${r.path}:`,...r.text.trimEnd().split(`
`)]);var a=(t)=>`stays here: ${t.path} (${t.words})`;var j2s=(t)=>[...t.files.map(Vya),...$2s(t.unnamed?.files??0,"file"),...t.stays.map(a),...$2s(t.unnamed?.stays??0,"entry")].map(J1o);export{Vya,$2s,J1o,B2s,W2s,j2s};
