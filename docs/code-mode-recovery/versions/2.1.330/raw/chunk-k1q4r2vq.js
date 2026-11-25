// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Znt}from"/$bunfs/root/chunk-bzyb60p0.js";import{$o}from"/$bunfs/root/chunk-ed372ykp.js";import{BAe}from"/$bunfs/root/chunk-z6hn62tj.js";function Mer({lineage:s,agentId:e},r){return s&&Object.values(r.all()).find((t)=>[t.id,BAe(t)].some((i)=>s.has(i))&&(!$o(t.status)||t.id!==e&&Znt(t)))}
export{Mer};
