// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{mee}from"/$bunfs/root/chunk-pgax0ygy.js";function Tga(o,t){try{o.toolState.get(mee).add(t,o.abortController)}catch(r){i(r)}}function jFo(o){try{o.toolState.get(mee).forget(o.abortController.signal)}catch(t){i(t)}}function GFo(o){try{let t=o.abortController.signal;if(!o.toolState.get(mee).endedTurns.has(t))return!1;if(!t.aborted)o.abortController.abort("end_conversation");return!0}catch(t){return i(t),!1}}function VUr(o,t){try{o.toolState.get(mee).declinedTurns.add(t)}catch(r){i(r)}}function bWs(o,t){try{if(!o.toolState.get(mee).declinedTurns.delete(t))return!1;return o.abortController.abort(),import.meta.require("/$bunfs/root/chunk-k7mkb76g.js").holdQueuedReports(o.messageQueue),!0}catch(r){return i(r),!1}}
export{Tga,jFo,GFo,VUr,bWs};
