// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{f}from"/$bunfs/root/chunk-78g0060s.js";import{a}from"/$bunfs/root/chunk-y53wbr8a.js";import{Ny}from"/$bunfs/root/chunk-t9k2xeez.js";import{T9e}from"/$bunfs/root/chunk-5m9vge4h.js";function B3t(){return Ny()||T9e()}function vpa(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function M1r(e,o){a("tengu_remote_attach_record_lookup",{outcome:f(e),entry_point:f(o)})}
export{B3t,vpa,M1r};
