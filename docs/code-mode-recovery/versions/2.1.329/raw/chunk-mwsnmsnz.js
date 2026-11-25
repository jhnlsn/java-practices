// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{u}from"/$bunfs/root/chunk-y98mhv74.js";import{a}from"/$bunfs/root/chunk-487kez16.js";import{ay}from"/$bunfs/root/chunk-fgc0k4tn.js";import{L4e}from"/$bunfs/root/chunk-bj14hy14.js";function K6t(){return ay()||L4e()}function Pna(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function aMr(e,o){a("tengu_remote_attach_record_lookup",{outcome:u(e),entry_point:u(o)})}
export{K6t,Pna,aMr};
