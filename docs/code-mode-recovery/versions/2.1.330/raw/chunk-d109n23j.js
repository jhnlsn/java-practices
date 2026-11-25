// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{i}from"/$bunfs/root/chunk-k449cc64.js";import{Yte}from"/$bunfs/root/chunk-a36sa5qg.js";function vAa(o,t){try{o.toolState.get(Yte).add(t,o.abortController)}catch(r){i(r)}}function azo(o){try{o.toolState.get(Yte).forget(o.abortController.signal)}catch(t){i(t)}}function lzo(o){try{let t=o.abortController.signal;if(!o.toolState.get(Yte).endedTurns.has(t))return!1;if(!t.aborted)o.abortController.abort("end_conversation");return!0}catch(t){return i(t),!1}}function E6r(o,t){try{o.toolState.get(Yte).declinedTurns.add(t)}catch(r){i(r)}}function P4s(o,t){try{if(!o.toolState.get(Yte).declinedTurns.delete(t))return!1;return o.abortController.abort(),import.meta.require("/$bunfs/root/chunk-ymvk0vd5.js").holdQueuedReports(o.messageQueue),!0}catch(r){return i(r),!1}}
export{vAa,azo,lzo,E6r,P4s};
