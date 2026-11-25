// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{Cbo}from"/$bunfs/root/chunk-s0zsg6za.js";function Pet(e,r){return e.toLocaleString("en-US",{month:"short",day:"numeric",...r?.includeYear&&{year:"numeric"},hour:"numeric",minute:"2-digit",timeZone:Cbo()}).replace(/,? at |, (?=\d{1,2}:)/," ").replace(/[ \u202f]([AP]M)/i,(o,t)=>t.toLowerCase())}
export{Pet};
