// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{O}from"/$bunfs/root/chunk-7cfjrnwy.js";import{jve}from"/$bunfs/root/chunk-tkg68a1m.js";import{Ft}from"/$bunfs/root/chunk-tp3c5q2s.js";import{dn}from"/$bunfs/root/chunk-7e12xj51.js";var Vxa=(t)=>`${t.path} (${dn(t.bytes)})`;var Y5s=(t,r)=>[t].filter((e)=>e>0).map((e)=>`and ${e} more ${O(e,r)} not named here`);var h6o=(t)=>(/^ */.exec(t)?.[0]??"")+Ft(t,jve);var X5s=(t)=>[t].filter((r)=>r>0).map((r)=>`${r} ${O(r,"entry stays","entries stay")} on this machine (secrets, links, ignored files)`);var J5s=(t)=>[t??[]].flat().flatMap((r)=>[`Writes this manifest first, to ${r.path}:`,...r.text.trimEnd().split(`
`)]);var a=(t)=>`stays here: ${t.path} (${t.words})`;var Q5s=(t)=>[...t.files.map(Vxa),...Y5s(t.unnamed?.files??0,"file"),...t.stays.map(a),...Y5s(t.unnamed?.stays??0,"entry")].map(h6o);export{Vxa,Y5s,h6o,X5s,J5s,Q5s};
